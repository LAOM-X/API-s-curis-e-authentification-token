// Validation
const Joi = require("@hapi/joi");

const registerValidation = (data) => { // data (req.body)
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(), // length min is 6 and the mail is required
    password: Joi.string().min(5).required(), // length min 5 and is required
  });

  return schema.validate(data);// return the validated req.boy
};
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(5).required(),
  });

  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
