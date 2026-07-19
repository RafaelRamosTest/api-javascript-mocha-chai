function generateRandomUser() {
  const randomId = Math.floor(Math.random() * 1000000);
  return {
    nome: `User Teste ${randomId}`,
    email: `userteste_${randomId}@qa.com`,
    password: `pwd_${randomId}`,
    administrador: "true"
  };
}

module.exports = {
  generateRandomUser
};