const express = require("express");
const router = express.Router();

const {
  getProducts,
  newProduct,
  getProductById,
  updateProduct,
  deleteProductById,
} = require("../controllers/productController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/products").get(getProducts);
router
  .route("/product")
  .post(isAuthenticatedUser, authorizeRoles("admin"), newProduct);
router.route("/product/:_id").get(getProductById);
router
  .route("/product/:_id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProductById);

module.exports = router;
