import express from "express";

import { registerController } from "../Controller/authController.js";
import {
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../Controller/authController.js";
import { loginController } from "../Controller/authController.js";
import { testController } from "../Controller/authController.js";
import { isAdmin, registerSignIn } from "../middlewares/authMiddleware.js";
import { forgotPasswordController } from "../Controller/authController.js";
//router object created(If Seprate File used for router)
const router = express.Router();
//routing
//Register
router.post("/register", registerController);

//LOGIN || Post
router.post("/login", loginController);

//test Router
router.get("/test", registerSignIn, isAdmin, testController);

//protected Route auth
router.get("/user-auth", registerSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//forgot Password
router.post("/forgot-password", forgotPasswordController);
//admin routh
router.get("/admin-auth", registerSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", registerSignIn, updateProfileController);

//orders
router.get("/orders", registerSignIn, getOrdersController);

//all orders
router.get("/all-orders", registerSignIn, isAdmin, getAllOrdersController);
// order status update
router.put(
  "/order-status/:orderId",
  registerSignIn,
  isAdmin,
  orderStatusController
);

export default router;
