const mongoose = require("mongoose");

const netTransactionsSchema = new mongoose.Schema(
  {
    incomeCategories: {
      type: [],
    },
    expenseCategories: {
      type: [],
    },
    owner: String,
  },
  {
    timestamps: true,
  }
);

const NetTransaction = mongoose.model("NetTransaction", netTransactionsSchema);

module.exports = NetTransaction;
