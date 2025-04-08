const Joi = require("joi");

exports.statusValidation = (body) => {
  const schemaStatus = Joi.object({
    name: Joi.string().valid("approved","rejected","cancelled","pending","completed","in_progress").message("/name/ jarayonni to'g'ri kiriting"),
    description: Joi.string(),
  });
  return schemaStatus.validate(body, {
    ebortEarly: false,
  })
};
