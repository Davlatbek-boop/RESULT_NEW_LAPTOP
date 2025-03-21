const Joi = require("joi");

exports.languagesValidation = (body) => {
  const schemaLanguages = Joi.object({
    language_name: Joi.string().required().messages({
      "string.empty": "So'z bo'sh bo'lishi mumkin emas",
      "any.required": "So'zni kiriting",
    }),
    language_code:Joi.number(),
    is_active: Joi.boolean()
  });
  return schemaLanguages.validate(body, {
    ebortEarly: false,
  });
};
