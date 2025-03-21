const Joi = require("joi");

exports.word_categoriesValidation = (body) => {
  const schemaWord_categoris = Joi.object({
    word_id: Joi.number(),
    category_id: Joi.number(),
    created_at: Joi.date().less("2025-01-01"),
    created_by: Joi.number(),
  });
  return schemaWord_categoris.validate(body, {
    ebortEarly: false,
  });
};
