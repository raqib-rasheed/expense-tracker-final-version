import {
  expenseCategories,
  incomeCategories,
  initialIncomeValue,
} from "../../../../utils/categoriesConstants";
import { addTransaction } from "./addTransaction";
import { v4 as uuidv4 } from "uuid";
import {
  ITransaction,
  TContextProps,
} from "../../../../types/transactions-types";
import { Dispatch, SetStateAction } from "react";

const createTransactionWithSpeechly = (
  transactionToCreate: ITransaction,
  setTransactionToCreate: Dispatch<SetStateAction<any>>,
  contextProps: TContextProps
) => {
  // const { transactions, setTransactions } = contextProps;
  // // if (
  // //   Number.isNaN(Number(transactionToCreate.amount)) ||
  // //   !transactionToCreate.date.includes("-")
  // // )
  // //   return;
  // if (
  //   incomeCategories.map((iC) => iC.type).includes(transactionToCreate.category)
  // ) {
  //   setTransactionToCreate({ ...transactionToCreate, type: "Income" });
  // } else if (
  //   expenseCategories
  //     .map((iC) => iC.type)
  //     .includes(transactionToCreate.category)
  // ) {
  //   setTransactionToCreate({ ...transactionToCreate, type: "Expense" });
  // }
  // addTransaction(
  //   { ...transactionToCreate, id: uuidv4() },
  //   transactions.transactions,
  //   setTransactions
  // );
  // setTransactionToCreate(initialIncomeValue);
};

export default createTransactionWithSpeechly;
