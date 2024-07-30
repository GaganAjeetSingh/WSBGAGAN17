
 
const express = require('express');
const insertProduct = require('../../controller/products/insertProduct');
const { models } = require('mongoose');
const upload = require('../../middlewares/multer/multer');


const productRoutes = express.Router();

productRoutes.post('/insert_product', upload ,insertProduct)

module.exports = productRoutes;