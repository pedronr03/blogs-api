const CustomError = require('../errors/CustomError');
const { categorySchema } = require('../schemas/categorySchema');

const authCreateCategory = (req, _res, next) => {
  const { error } = categorySchema.validate(req.body);
  if (error) throw new CustomError(400, 'BAD_REQUEST', error.message);
  next();
};

module.exports = authCreateCategory;