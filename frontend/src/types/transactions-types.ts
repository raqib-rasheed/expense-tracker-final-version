import { Dispatch } from "react";

export interface ITransaction {
  type: string;
  category: string;
  amount: number;
  id: string;
}

export interface IAnalyzedTransactions {
  incomeCategories: {
    type: string;
    amount: number;
    color: string;
  }[];
  expenseCategories: {
    type: string;
    amount: number;
    color: string;
  }[];
}

export type TContextTransactions = {
  type: string;
  category: string;
  amount: number;
  _id: string;
}[];

export type TContextProps = {
  transactions: {
    type: string;
    category: string;
    amount: number;
    _id: string;
  }[];
  setTransactions: Dispatch<any>;
  token: String;
  setToken: Dispatch<React.SetStateAction<string>>;
};

export interface IFormGroupAndCardBodyProp {
  transactionToCreate: ITransaction;
  setTransactionToCreate: React.Dispatch<React.SetStateAction<ITransaction>>;
}

export type TContextPropsForFinalTransactions = {
  transactions: {
    type: string;
    category: string;
    amount: number;
    _id: string;
    createdAt: "";
  }[];
  setTransactions: Dispatch<any>;
  token: String;
  setToken: Dispatch<React.SetStateAction<string>>;
};
