const express = require("express");
const router = new express.Router();
const NetTransaction = require("../models/netTransaction");

router
  .post("/netTransactions", async (req, res) => {
    try {
      const transaction = new NetTransaction(req.body);
      transaction.owner = req.header("Authorization");
      await transaction.save();
      res.status(200).send({ token: transaction.owner });
    } catch (error) {
      res.send(error).status(500);
    }
  })
  .patch("/netTransactions/:id", async (req, res) => {
    const { type, category, amount } = req.body;

    const transactions = await NetTransaction.findOne({
      owner: req.params.id,
    });
    transactions[`${type}Categories`].find(
      (item) => item.type === category
    ).amount += amount;
    await NetTransaction.updateOne(
      {
        owner: req.params.id,
      },
      transactions
    );
    res.status(200).send(transactions);
  })
  .get("/netTransactions/:id", async (req, res) => {
    const owner = req.params.id;
    try {
      const transactions = await NetTransaction.findOne({
        owner,
      });
      if (!transactions) {
        return res.status.send(404);
      }
      const totalExpense = transactions.expenseCategories.reduce(
        (acc, crr) => (acc += crr.amount),
        0
      );
      const totalIncome = transactions.incomeCategories.reduce(
        (acc, crr) => (acc += crr.amount),
        0
      );
      const netTotal = totalIncome - totalExpense;
      res.status(200).send({ transactions, netTotal });
    } catch (err) {
      res.status(500).send(err);
    }
  });

module.exports = router;
