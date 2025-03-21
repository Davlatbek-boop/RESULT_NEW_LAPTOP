const Joi = require("joi");

exports.currencyTypeValidation = (body) => {
  const schemaCurrencyType = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
  });
  return schemaCurrencyType.validate(body, {
    ebortEarly: false,
  });
};
