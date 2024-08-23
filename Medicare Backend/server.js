const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./controller/user");
const port = 3001;

const app = express();
const url = "mongodb://localhost:27017/Elamugilan";

// Connect to MongoDB
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected.."))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Middleware
app.use(cors()); // Ensure CORS is set before routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/user", userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
