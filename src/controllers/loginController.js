const loginService = require('../services/loginService');

const login = async (req, res) => {
  const token = await loginService.login(req.body);
  console.log(token);
  return res.status(200).json({ token });
};

module.exports = {
  login,
};