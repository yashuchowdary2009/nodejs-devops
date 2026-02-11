const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authMiddleware = require("./middleware/authMiddleware");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// auth routes
app.use("/api/auth", require("./routes/authRoutes"));

// product routes (protected)
app.use("/api", authMiddleware, require("./routes/productsRoutes"));

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connection Success");
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server Started");
    });
  })
  .catch(err => console.log("Connection Failed", err));
