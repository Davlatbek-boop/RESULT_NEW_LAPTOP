const Joi = require("joi");

exports.etymologysValidation = (body) => {
  const schemaEtymologys = Joi.object({
    word_id: Joi.number(),
    etymology_text: Joi.string(),
    etymology_order: Joi.number(),
    created_at: Joi.date().less(new Date("2000-01-01")),
    created_by: Joi.number(),
  });
  return schemaEtymologys.validate(body, {
    ebortEarly: false,
  });
};
