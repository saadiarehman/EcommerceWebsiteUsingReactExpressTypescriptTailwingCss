const joi = require("joi");
const addProductsServices = require("../services/addProductsServices");

const addproductsSchema = joi.object().keys({
  name: joi.string().required(),
  country: joi.string().required(),
  price: joi.string().required(),
  additionalInformation: joi.string().required(),
  description: joi.string().required(),
});

module.exports = {
  addProducts: [async (req, res) => {
    try {
        console.log("Request Body:", req.body);

      const { name, country, price, additionalInformation, description } = req.body;

      const validatedData = await addproductsSchema.validateAsync({
        name,
        country,
        price,
        additionalInformation,
        description,
      });

      const addProducts = await addProductsServices.addProducts(validatedData);
      res.status(201).send({ message: 'Products added successfully', user: addProducts });
    } catch (error) {
      console.error("Error processing request:", error);

      if (error.details) {
        // Validation error
        console.error("Validation error details:", error.details);
        res.status(400).send({ error: error.details.map((detail) => detail.message) });
      } else {
        // Other types of errors
        console.error("Internal server error:", error);
        res.status(500).send({ error: 'Internal server error' });
      }
    }
  }],
};
