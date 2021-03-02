const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      default: "Business",
    },
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      default: "income",
    },
    id: {
      type: String,
    },
    owner: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
