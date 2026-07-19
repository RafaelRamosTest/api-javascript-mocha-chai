const getAuthHeader = (token) => ({
  'Authorization': token,
  'Content-Type': 'application/json'
});

module.exports = { getAuthHeader };