const CustomError = require('../errors/CustomError');
const { postSchema } = require('../schemas/postSchema');

const authCreatePost = (req, _res, next) => {
  const { error } = postSchema.validate(req.body);
  if (error) throw new CustomError(400, 'BAD_REQUEST', error.message);
  next();
};

module.exports = authCreatePost;