require("./db/mongoose");
const express = require("express");
const transactionRoutes = require("./routes/transactionRoutes");
const userLoginRoutes = require("./routes/userlogin");
const netTransactionsRoutes = require("./routes/netTransactions");

const app = express();
app.use(express.json());
app.use(transactionRoutes);
app.use(userLoginRoutes);
app.use(netTransactionsRoutes);

module.exports = app;
