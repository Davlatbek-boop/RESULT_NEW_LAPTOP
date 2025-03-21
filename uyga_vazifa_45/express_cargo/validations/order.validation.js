const Joi = require("joi");

exports.orderValidation = (body) => {
  const schemaOrder = Joi.object({
    order_unique_id: Joi.string(),
    full_name: Joi.string(),
    phone_number: Joi.string().pattern(/^\d{2}-\d{3}-\d{2}-\d{2}$/),
    product_link: Joi.string(),
    summa: Joi.number(),
    currency_type_id: Joi.number(),
    truck: Joi.string(),
    email: Joi.string().email().lowercase(),
    description: Joi.string()
  });
  return schemaOrder.validate(body, {
    ebortEarly: false,
  });
};
