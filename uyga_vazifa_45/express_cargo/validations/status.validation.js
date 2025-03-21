const Joi = require("joi");

exports.statusValidation = (body) => {
  const schemaStatus = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
  });
  return schemaStatus.validate(body, {
    ebortEarly: false,
  });
};
