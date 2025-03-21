const Joi = require("joi");

exports.relatedsValidation = (body) => {
  const schemaRelated_words = Joi.object({
    word_id: Joi.number(),
    related_to_word_id: Joi.number(),
    relation_type_id: Joi.number(),
    created_at: Joi.date().less("2025-01-01"),
    created_by: Joi.number()
  });
  return schemaRelated_words.validate(body, {
    ebortEarly: false,
  });
};
