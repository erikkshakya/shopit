import { combineReducers } from "redux";
import {
  productsReducer,
  productDetailsReducer,
  newReviewReducer,
  createProductReducer,
} from "./productReducers";
import {
  authReducer,
  userReducer,
  forgotPasswordReducer,
} from "./userReducers";
import { cartReducer } from "./cartReducers";
import {
  orderReducers,
  myOrdersReducers,
  orderDetailsReducers,
} from "./orderReducers";

export default combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  auth: authReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  order: orderReducers,
  myOrders: myOrdersReducers,
  orderDetails: orderDetailsReducers,
  newReview: newReviewReducer,
  createProduct: createProductReducer,
});
