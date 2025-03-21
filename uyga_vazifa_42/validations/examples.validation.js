const Joi = require("joi");

exports.examplesValidation = (body) => {
  const schemaExamples = Joi.object({
    word_id: Joi.number(),
    example_text: Joi.string(),
    example_translation: Joi.string(),
    created_at: Joi.date().less("2025-01-01"),
    created_by: Joi.number(),
  });
  return schemaExamples.validate(body, {
    ebortEarly: false,
  });
};
