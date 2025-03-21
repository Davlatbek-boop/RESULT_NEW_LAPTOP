const Joi = require("joi");

exports.relationsValidation = (body) => {
  const schemaRelations = Joi.object({
    relation_name: Joi.string(),
    description: Joi.string(),
  });
  return schemaRelations.validate(body, {
    ebortEarly: false,
  });
};
