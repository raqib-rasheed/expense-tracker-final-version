export const incomeCategories = [
  { type: "Business", amount: 0, color: "#123123" },
  { type: "Trades", amount: 0, color: "#154731" },
  { type: "Deposits", amount: 0, color: "#16784f" },
  { type: "Lottery", amount: 0, color: "#14915f" },
  { type: "Gifts", amount: 0, color: "#10ac6e" },
  { type: "Salary", amount: 0, color: "#0bc77e" },
  { type: "Bonus", amount: 0, color: "#165f40" },
  { type: "Savings", amount: 0, color: "#04e38d" },
  { type: "Others", amount: 0, color: "#00ff9d" },
];

export const expenseCategories = [
  { type: "Bills", amount: 0, color: "#c9422c" },
  { type: "Car", amount: 0, color: "#d3581a" },
  { type: "Clothes", amount: 0, color: "#fc6a48" },
  { type: "Travel", amount: 0, color: "#ee7c58" },
  { type: "Food", amount: 0, color: "#ee8f68" },
  { type: "Shopping", amount: 0, color: "#ff9d79" },
  { type: "House", amount: 0, color: "#f4555f" },
  { type: "Phone", amount: 0, color: "#ffa48a" },
  { type: "Others", amount: 0, color: "#cc434b" },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => (c.amount = 0));
  expenseCategories.forEach((c) => (c.amount = 0));
};

export const initialIncomeValue = {
  type: "income",
  category: "Business",
  amount: 0,
  id: "",
};

export const initialExpenseValue = {
  type: "expense",
  category: "Bills",
  amount: 0,
  id: "",
};

export const initialValue = {
  type: "",
  category: "",
  amount: 0,
  id: "",
};

export const initialChartValue = {
  incomeCategories: [{ type: "", color: "", amount: 0 }],
  expenseCategories: [{ type: "", color: "", amount: 0 }],
};
