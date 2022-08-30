const CustomError = require('../errors/CustomError');
const { updatePostSchema } = require('../schemas/postSchema');

const authUpdatePost = (req, _res, next) => {
  const { error } = updatePostSchema.validate(req.body);
  if (error) throw new CustomError(400, 'BAD_REQUEST', error.message);
  next();
};

module.exports = authUpdatePost;