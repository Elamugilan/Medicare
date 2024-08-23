const express = require("express");
const router = express.Router();
const UserModel = require("../usersSchema.js");
const { Console } = require("console");

// GET route to fetch users
router.get("/usersList", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// POST route to add a new user
router.post("/addusersList", async (req, res) => {
  const { name, email, message, password, LastName } = req.body;

  try {
    const newUser = new UserModel({
      name,
      email,
      message,
      password,
      LastName,
    });

    const savedUser = await newUser.save(); // Corrected variable name
    res.status(201).json({
      status: 1,
      message: "User added successfully",
      data: savedUser,
    });
  } catch (err) {
    console.error("Error adding user:", err.message, err.stack); // Detailed error logging
    res.status(500).json({
      status: 0,
      message: "Failed to add user",
      error: err.message,
    });
  }
});

module.exports = router;
