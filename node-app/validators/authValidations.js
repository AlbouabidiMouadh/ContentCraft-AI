const Joi = require("joi");
const schemaSignUpValidation = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "uk", "us", "fr"] },
  }),
  password: Joi.string().required(),
  repeat_password: Joi.ref("password"),
}).with("password", "repeat_password");

const schemaSignInValidation = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "uk", "us", "fr"] },
  }),
  password: Joi.string(),
});

module.exports.authValidation = {
  schemaSignInValidation,
  schemaSignUpValidation,
};
