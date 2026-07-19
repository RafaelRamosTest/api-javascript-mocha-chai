const userService = require('../services/user.services');

async function getFirstUserId(token) {
  const response = await userService.listUsers(token);
  
  if (response.body.usuarios && response.body.usuarios.length > 0) {
    return response.body.usuarios[0]._id;
  }
  
  throw new Error('Nenhum usuário encontrado na base para retornar um ID.');
}

module.exports = { getFirstUserId };