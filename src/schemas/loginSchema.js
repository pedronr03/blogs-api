const Joi = require('joi');

const STRING_EMPTY = 'Some required fields are missing';
const STRING_REQUIRED = 'Some required fields are missing';

const loginSchema = Joi.object().keys({
  email: Joi.string().email().required().messages({
    'string.required': STRING_REQUIRED,
    'string.empty': STRING_EMPTY,
  }),
  password: Joi.string().required().messages({
    'string.required': STRING_REQUIRED,
    'string.empty': STRING_EMPTY,
  }),
});

module.exports = {
  loginSchema,
};