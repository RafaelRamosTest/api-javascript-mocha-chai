const request = require('supertest');
const config = require('../config/env');

const loginService = {
  login: async (email, password) => {
    return await request(config.baseUrl).post('/login').send({
        email: email,
        password: password
      });
  }
};

module.exports = loginService;