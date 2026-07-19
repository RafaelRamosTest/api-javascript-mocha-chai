const request = require('supertest');
const config = require('../config/env');
const { getAuthHeader } = require('../utils/headers');

const baseUrl = config.baseUrl;

const userService = {

  listUsers: async (token) => {
    const response = await request(baseUrl).get("/usuarios").set(getAuthHeader(token));
    //console.log('Response from listUsers:', response.body);
    return response;
  },

  createUser: async (user, token) => {
    const response = await request(baseUrl).post("/usuarios").set(getAuthHeader(token)).send(user);
    //console.log('Response from createUser:', response.body);
    return response;
  },

  getUserById: async (id, token) => {
    const response = await request(baseUrl).get(`/usuarios/${id}`).set(getAuthHeader(token));
    //console.log('Response from getUserById:', response.body);
    return response;
  },

  updateUser: async (id, user, token) => {
    const response = await request(baseUrl).put(`/usuarios/${id}`).set(getAuthHeader(token)).send(user);
    //console.log('Response from updateUser:', response.body);
    return response;
  },

  deleteUser: async (id, token) => {
    const response = await request(baseUrl).delete(`/usuarios/${id}`).set(getAuthHeader(token));
    //console.log('Response from deleteUser:', response.body);
    return response;
  },

};

module.exports = userService;