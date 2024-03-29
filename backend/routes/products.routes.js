import express from "express";
import ProductsCtrl from "../controllers/products.controller.js";

const router = express.Router();

router.route("/").get(ProductsCtrl.getProducts);

router.route("/:id").get(ProductsCtrl.getProductById);

router.route("/:id/reviews").get(ProductsCtrl.getReviewsByProductId);

export default router;
