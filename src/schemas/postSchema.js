const Joi = require('joi');

const STRING_EMPTY = 'Some required fields are missing';
const STRING_REQUIRED = 'Some required fields are missing';
const ARRAY_MIN = '"categoryIds" not found';
const ARRAY_EMPTY = '"categoryIds" not found';
const ARRAY_REQUIRED = '"categoryIds" not found';

const postSchema = Joi.object().keys({
  title: Joi.string().required().messages({
    'string.empty': STRING_EMPTY,
    'any.required': STRING_REQUIRED,
  }),
  content: Joi.string().required().messages({
    'string.empty': STRING_EMPTY,
    'any.required': STRING_REQUIRED,
  }),
  categoryIds: Joi.array().min(1).required().messages({
    'array.empty': ARRAY_EMPTY,
    'array.min': ARRAY_MIN,
    'any.required': ARRAY_REQUIRED,
  }),
});

module.exports = {
  postSchema,
};