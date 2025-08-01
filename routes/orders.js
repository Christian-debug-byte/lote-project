const express = require("express");
const router = express.Router();

const Order = require("../models/Order");

// Place a new order
router.post("/", async (req, res) => {
  try {
    const { userId, products, deliveryInfo, paymentMethod } = req.body;

    const newOrder = new Order({
      userId,
      products,
      deliveryInfo,
      paymentMethod,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get all orders (example)
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
