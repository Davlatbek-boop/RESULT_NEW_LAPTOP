const Joi = require("joi");

exports.pronunciationsValidation = (body) => {
  const schemapronunciations = Joi.object({
    word_id: Joi.number(),
    ipa_text: Joi.string(),
    audio_file_path: Joi.string(),
    created_at: Joi.date().less(new Date("2000-01-01")),
    created_by: Joi.number(),
  });
  return schemapronunciations.validate(body, {
    ebortEarly: false,
  });
};
