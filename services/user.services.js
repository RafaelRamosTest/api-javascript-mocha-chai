const request = require('supertest');
const config = require('../config/env');
const { getAuthHeader } = require('../utils/headers');

const baseUrl = config.baseUrl;

const userService = {

  listUsers: async (token) => {
    return await request(baseUrl).get("/usuarios").set(getAuthHeader(token));
  },

  createUser: async (user, token) => {
    return await request(baseUrl).post("/usuarios").set(getAuthHeader(token)).send(user);
  },

  getUserById: async (id, token) => {
    return await request(baseUrl).get(`/usuarios/${id}`).set(getAuthHeader(token));
  },

  updateUser: async (id, user, token) => {
    return await request(baseUrl).put(`/usuarios/${id}`).set(getAuthHeader(token)).send(user);
  },

  deleteUser: async (id, token) => {
    return await request(baseUrl).delete(`/usuarios/${id}`).set(getAuthHeader(token));
  },

  deleteUser2: async (id, token) => {
    // Vamos garantir que se o token for undefined, a gente saiba o porquê
    if (!token) {
      throw new Error(`O token enviado para deleteUser(${id}) está vazio!`);
    }

    return await request(baseUrl)
      .delete(`/usuarios/${id}`)
      .set('Authorization', token) // Injeção direta e simples
      .set('Content-Type', 'application/json');
  }

};

module.exports = userService;