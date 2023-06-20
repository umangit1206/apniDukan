import express from "express";
import { isAdmin, registerSignIn } from "./../middlewares/authMiddleware.js";
import {
  categoryControlller,
  createCategoryController,
  deleteCategoryCOntroller,
  singleCategoryController,
  updateCategoryController,
} from "./../Controller/categoryController.js";

const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  registerSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  registerSignIn,
  isAdmin,
  updateCategoryController
);

//getALl category
router.get("/get-category", categoryControlller);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  registerSignIn,
  isAdmin,
  deleteCategoryCOntroller
);

export default router;
