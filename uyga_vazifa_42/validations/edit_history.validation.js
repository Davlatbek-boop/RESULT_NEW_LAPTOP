const Joi = require("joi");

exports.edit_historyValidation = (body) => {
  const schemaEditHistory = Joi.object({
    word_id: Joi.number(),
    user_id: Joi.number(),
    edit_type: Joi.string(),
    edit_details: Joi.string(),
    edit_timestamp: Joi.date().less("2025-01-01"),
  });
  return schemaEditHistory.validate(body, {
    ebortEarly: false,
  });
};
