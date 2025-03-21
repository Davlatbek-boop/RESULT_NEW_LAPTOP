const Joi = require("joi");

exports.speechsValidation = (body) => {
  const schemaSpeechs = Joi.object({
    name: Joi.string(),
    abbreviation: Joi.string(),
    description: Joi.string(),
  });
  return schemaSpeechs.validate(body, {
    ebortEarly: false,
  });
};
