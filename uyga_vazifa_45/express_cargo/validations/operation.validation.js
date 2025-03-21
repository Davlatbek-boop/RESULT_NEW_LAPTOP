const Joi = require("joi");

exports.operationValidation = (body) => {
  const schemaOperation = Joi.object({
    order_id: Joi.number(),
    status_id: Joi.number(),
    operation_date: Joi.date().less("2025-01-01"),
    admin_id: Joi.number(),
    description: Joi.string(),
  });
  return schemaOperation.validate(body, {
    ebortEarly: false,
  });
};
