const { productsServices } = require('../services');

const getAllProducts = async (_req, res, next) => {
  try {   
    const result = await productsServices.getAllProducts();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getProductsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await productsServices.getProductsByID(id);
    res.status(200).json(result[0]);
  } catch (error) {
    next(error);
  }
};

const addProduct = async (req, res, next) => {
  try {
    const { name } = req.body;
    const response = await productsServices.insertProduct(name);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getProductsById,
  addProduct,
};
