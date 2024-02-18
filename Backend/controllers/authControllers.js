const joi = require("joi");
const authService = require("../services/authService");

const signUpSchema = joi.object().keys({
  fname: joi.string().required(),
  lname: joi.string().required(),
  username: joi.string().required(),
  password: joi.string().required(),
  email: joi.string().required(),
  mobilenum: joi.string().required(),
});

const loginSchema = joi.object().keys({
  email: joi.string().required(),
  password: joi.string().required(),
});

module.exports = {
  signUp: async (req, res) => {
    try {
      console.log(req.body);
      const validate = await signUpSchema.validateAsync(req.body);
      console.log(validate);

      if (validate.error) {
        res.status(400).send(validate.error.details.map(detail => detail.message));
        return; // Return to avoid processing the signup if there's a validation error
      }

      const selleruser = await authService.signUp(validate);
      res.status(201).send({ message: 'User signed up successfully', user: selleruser });
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ error: 'Internal server error' });
    }
  },
};
