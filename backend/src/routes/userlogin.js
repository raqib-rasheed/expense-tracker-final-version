const express = require("express");
const router = new express.Router();
const User = require("../models/login_details");
const Transaction = require("../models/transaction");

router.post("/login", async (req, res) => {
  const existingUser = await User.findOne({
    email: req.body.email,
  });
  if (!existingUser) {
    try {
      const user = new User(req.body);
      await user.save();
      return res.status(201).send({ user, token: user._id });
    } catch (error) {
      return res.status(500).send("something went wrong");
    }
  }
  if (existingUser.password !== req.body.password) {
    return res.status(404).send("incorrect password");
  }
  res.status(200).send({ existingUser, token: existingUser._id });
});

module.exports = router;
