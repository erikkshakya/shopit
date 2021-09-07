const express = require("express");
const router = express.Router();
const { isAuthenticatedUser } = require("../middlewares/auth");
const {
  processPayment,
  sendStripeAPI,
} = require("../controllers/paymentController");

router.route("/payment/process").post(isAuthenticatedUser, processPayment);
router.route("/stripeapi").get(isAuthenticatedUser, sendStripeAPI);

module.exports = router;
