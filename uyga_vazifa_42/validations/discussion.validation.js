const Joi = require("joi");

exports.discussionValidation = (body) => {
  const schemaDiscussion = Joi.object({
    word_id: Joi.number(),
    user_id: Joi.number(),
    discussion_text: Joi.string(),
    created_at: Joi.date().less("2025-01-01"),
    is_active: Joi.boolean(),
  });
  return schemaDiscussion.validate(body, {
    ebortEarly: false,
  });
};
