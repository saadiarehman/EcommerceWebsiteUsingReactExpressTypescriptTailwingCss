const { models } = require("./index");

module.exports = {
  addProducts: async (body) => {
    try {
      console.log("Data received by model:", body);
      const addproducts = await models.AddProducts.create({
        ...body,
      });
      return addproducts;
    } catch (error) {
      console.error('Error in addProducts:', error);
      throw new Error('Failed to add products to the database');
    }
  },
};
