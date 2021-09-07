const express = require("express");
const router = express.Router();

const {
  getProducts,
  getAllProducts,
  newProduct,
  getProductById,
  updateProduct,
  deleteProductById,
  createProductReview,
  getProductReview,
  deleteReview,
} = require("../controllers/productController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/products").get(getProducts);
router
  .route("/admin/product")
  .post(isAuthenticatedUser, authorizeRoles("admin"), newProduct);
router.route("/product/:_id").get(getProductById);
router
  .route("/admin/product/:_id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProductById);

router.route("/review").put(isAuthenticatedUser, createProductReview);
router.route("/reviews").get(isAuthenticatedUser, getProductReview);
router.route("/reviews").delete(isAuthenticatedUser, deleteReview);

router.route("/admin/products").get(isAuthenticatedUser, getAllProducts);

module.exports = router;
