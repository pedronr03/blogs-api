const CustomError = require('../errors/CustomError');
const { loginSchema } = require('../schemas/loginSchema');

const authLogin = (req, _res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) throw new CustomError(400, 'BAD_REQUEST', error.message);
  next();
};

module.exports = authLogin;