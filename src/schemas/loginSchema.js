const Joi = require('joi');

const STRING_EMPTY = 'Some required fields are missing';
const STRING_REQUIRED = 'Some required fields are missing';

const loginSchema = Joi.object().keys({
  email: Joi.string().email().required().messages({
    'string.empty': STRING_EMPTY,
    'any.required': STRING_REQUIRED,
  }),
  password: Joi.string().required().messages({
    'string.empty': STRING_EMPTY,
    'any.required': STRING_REQUIRED,
  }),
});

module.exports = {
  loginSchema,
};