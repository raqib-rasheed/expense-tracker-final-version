import React, { createContext, FC, useState } from "react";
import { initialIncomeValue } from "../utils/categoriesConstants";

// import {
//   expenseCategories,
//   incomeCategories,
// } from "../utils/categoriesConstants";

export const ExportTrackerContext = createContext({});
export const Provider: FC = ({ children }) => {
  const [transactions, setTransactions] = useState([initialIncomeValue]);
  const [token, setToken] = useState("");

  // const [data, setData] = useState({ incomeCategories, expenseCategories });
  return (
    <ExportTrackerContext.Provider
      value={{ transactions, setTransactions, token, setToken }}
    >
      {children}
    </ExportTrackerContext.Provider>
  );
};
