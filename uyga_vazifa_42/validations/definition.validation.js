const Joi = require("joi");

exports.definitionsValidation = (body) => {
  const schemaDefinitions = Joi.object({
    word_id: Joi.string(), // Endi ruxsat berilgan
    definition_text: Joi.string().required(),
    part_of_speech_id: Joi.number().required(),
    definition_order: Joi.number(), // To‘g‘ri nom bilan ishlatish kerak
    created_at: Joi.date().less("2000-01-01"),
    updated_at: Joi.date().less("2000-01-01"),
    created_by: Joi.number(),
  });
  return schemaDefinitions.validate(body, {
    abortEarly: false, // ✅ to‘g‘ri
  });  
};
