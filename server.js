require("dotenv").config(); // Load .env variables

const express = require("express");
const mongoose = require("mongoose");
const ordersRoute = require("./routes/orders");

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB WITHOUT deprecated options
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/orders", ordersRoute);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
