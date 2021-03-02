const express = require("express");
const NetTransaction = require("../models/netTransaction");
const router = new express.Router();
const Transaction = require("../models/transaction");

router
  .post("/transactions", async (req, res) => {
    const transaction = new Transaction({
      ...req.body,
      owner: req.header("Authorization"),
    });
    await transaction.save();
    res.status(200).send({ status: "ok", transaction });
  })
  .get("/transactions", async (req, res) => {
    const transactions = await Transaction.find({
      owner: req.header("Authorization"),
    }).sort({ createdAt: -1 });
    res.send(transactions);
  })
  .delete("/transactions/:id", async (req, res) => {
    try {
      const transaction = await Transaction.findByIdAndRemove({
        _id: req.params.id,
      });
      if (!transaction) {
        res.send("Failed to remove transaction");
      }
      res.status(200).send(transaction);
    } catch (error) {
      res.status(500).send();
    }
  });

module.exports = router;
