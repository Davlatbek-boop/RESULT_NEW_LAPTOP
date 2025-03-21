const Joi = require("joi");

exports.adminValidation = (body) => {
  const schemaAdmin = Joi.object({
    full_name: Joi.string().min(3).max(30),
    user_name: Joi.string(),
    password: Joi.string(),
    phone_number: Joi.string().pattern(/^\d{2}-\d{3}-\d{2}-\d{2}$/),
    email: Joi.string().email().lowercase(),
    tg_link: Joi.string(),
    is_creator: Joi.boolean(),
    is_active: Joi.boolean().default(false),
    description: Joi.string(),
  });
  return schemaAdmin.validate(body, {
    ebortEarly: false,
  });
};
