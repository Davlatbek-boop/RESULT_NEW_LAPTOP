const Joi = require("joi");

exports.categorysValidation = (body) => {
  const schemaCategorys = Joi.object({
    category_name: Joi.string(),
    category_description: Joi.string(),
    parent_category_id: Joi.number(),
    is_active: Joi.boolean()
  });
  return schemaCategorys.validate(body, {
    ebortEarly: false,
  });
};
