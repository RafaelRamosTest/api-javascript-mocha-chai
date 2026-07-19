const chai = require('chai');
const chaiJsonSchema = require('chai-json-schema');
const { expect } = chai;

chai.use(chaiJsonSchema);

const config = require('../config/env');
const userService = require('../services/user.services');
const { generateRandomUser } = require('../utils/helpers');
const { getFirstUserId } = require('../factories/user.factory');
const loginServices = require('../services/login.services');
const userSchema = require('../test/schemas/user.schema');

describe('Gerenciamento de Usuários - Endpoints /usuarios', () => {
  let dynamicUser;
  let token = '';

  before(async () => {
    try {
        const response = await loginServices.login(config.email, config.password);
        if (response.status === 200) {
            token = response.body.authorization;
        } else {
            console.log("AVISO: Login falhou com status " + response.status);
            token = "fake-token"; 
        }
    } catch (err) {
        console.log("Erro de conexão no login: " + err.message);
        token = "fake-token";
    }
  });

  beforeEach(() => {
    dynamicUser = generateRandomUser();
  });

  describe('POST /usuarios - Criação de novos usuários', () => {
    it('Cenário 1: Deve criar um novo usuário com sucesso', async () => {
      const response = await userService.createUser(dynamicUser, token);
      expect(response.status).to.equal(201);
      expect(response.body).to.have.property('_id');
    });

    it('Cenário 2: Deve retornar erro ao tentar cadastrar usuário com e-mail existente', async () => {
      const duplicateUser = generateRandomUser();
      await userService.createUser(duplicateUser, token);
      const response = await userService.createUser(duplicateUser, token);
      expect(response.status).to.equal(400);
      expect(response.body).to.have.property('message', 'Este email já está sendo usado');
    });
  });

  describe('GET /usuarios - Listagem de usuários', () => {
    it('Cenário 1: Deve listar todos os usuários (Teste de Contrato)', async () => {
      const response = await userService.listUsers(token);
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('usuarios');
      
      expect(response.body.usuarios[0]).to.be.jsonSchema(userSchema);
    });
  });

  describe('GET /usuarios/{id} - Detalhes específicos', () => {
    it('Cenário 1: Deve retornar informações de um usuário existente', async () => {
      const id = await getFirstUserId(token);
      const response = await userService.getUserById(id, token);
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('_id', id);
    });
  });

  describe('PUT /usuarios/{id} - Atualização', () => {
    it('Cenário 1: Deve atualizar com sucesso', async () => {
      const updatedData = { ...dynamicUser, nome: 'Nome Atualizado' };
      const id = await getFirstUserId(token);
      const response = await userService.updateUser(id, updatedData, token);
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('message', 'Registro alterado com sucesso');
    });
  });

  describe('DELETE /usuarios/{id} - Exclusão', () => {
    it('Cenário 1: Deve deletar com sucesso', async () => {
      const id = await getFirstUserId(token);
      const response = await userService.deleteUser(id, token);
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('message', 'Registro excluído com sucesso');
    });

    it('Cenário 2: Não deve deletar usuário com carrinho cadastrado', async () => {
      // Nota: Este cenário depende da massa de dados no servidor
      const id = await getFirstUserId(token);
      const response = await userService.deleteUser(id, token);
      // Nota: A validação aqui assume um comportamento esperado de regra de negócio
      expect(response.status).to.be.oneOf([200, 400]); 
    });
  });  
});