const Joi = require("joi");

exports.translationsValidation = (body) => {
  const schemaTranslations = Joi.object({
    word_id: Joi.number(),
    language_id: Joi.number(),
    translation_text: Joi.string(),
    created_at: Joi.date().less("2025-01-01"),
    created_by: Joi.number(),
  });
  return schemaTranslations.validate(body, {
    ebortEarly: false,
  });
};
