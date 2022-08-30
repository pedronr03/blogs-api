const CustomError = require('../errors/CustomError');
const { userSchema } = require('../schemas/userSchema');

const authCreateUser = (req, _res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) throw new CustomError(400, 'BAD_REQUEST', error.message);
  next();
};

module.exports = authCreateUser;