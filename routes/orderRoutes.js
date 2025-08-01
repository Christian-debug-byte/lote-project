const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// CRUD Routes
router.post("/", orderController.placeOrder);
router.get("/", orderController.getOrders);
router.get("/:id", orderController.getOrderById);
router.put("/:id", orderController.updateOrder);
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
