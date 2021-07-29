const express = require("express");
const router = express.Router();

const {
  getProducts,
  newProduct,
  getProductById,
  updateProduct,
  deleteProductById,
  createProductReview,
  getProductReview,
  deleteReview
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

module.exports = router;
