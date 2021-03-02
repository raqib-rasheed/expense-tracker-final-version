import axios from "axios";
import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";

import { addTransaction } from "../components/Main/transactions/utils/addTransaction";
import ILoginPropsTypes from "../types/loginForm-types";
import { ITransaction, TContextProps } from "../types/transactions-types";
import {
  initialExpenseValue,
  initialIncomeValue,
  initialValue,
  incomeCategories,
  expenseCategories,
} from "./categoriesConstants";

interface IHandleLoginSubmit {
  e: FormEvent<HTMLFormElement>;
  values: {
    email: string;
    password: string;
  };
  setLogged: Dispatch<SetStateAction<boolean>>;
  setToken: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<boolean>>;
}

export async function handleLoginCredentialSubmit(props: IHandleLoginSubmit) {
  const { e, values, setLogged, setToken, setError } = props;
  e.preventDefault();
  const { email, password } = values;
  try {
    const result = await axios({
      method: "post",
      url: "/login",
      data: {
        email,
        password,
      },
    });

    if (result.status === 201) {
      const response = await axios({
        method: "post",
        url: "/netTransactions",
        data: { incomeCategories, expenseCategories },
        headers: {
          Authorization: result.data.token,
        },
      });
      const { token } = response.data;
      setToken(token);
      return setLogged(true);
    }
    setToken(result.data.token);
    setLogged(true);
    window.localStorage.setItem("logged", "true");
  } catch (err) {
    return setError(true);
  }
}

export function handleChangeLoginFormChange(props: ILoginPropsTypes) {
  const { values, setValues, e } = props;
  setValues({ ...values, [e.target.name]: e.target.value });
}

export function handleChangeForAppInputs(
  e: ChangeEvent<any>,
  transactionToCreate: ITransaction,
  setTransactionToCreate: Dispatch<SetStateAction<ITransaction>>
) {
  const prop = e.target.id;
  const option = e.target;

  if (prop === "type") {
    option.value === "expense" && setTransactionToCreate(initialExpenseValue);
    option.value === "income" && setTransactionToCreate(initialIncomeValue);
  }

  setTransactionToCreate({
    ...transactionToCreate,
    [prop]: option.value,
  });
  if (prop === "amount") {
    setTransactionToCreate({
      ...transactionToCreate,
      [prop]: parseInt(e.target.value),
    });
  }
}

export async function handleSubmitForTransaction(
  e: FormEvent<HTMLFormElement>,
  transactionToCreate: ITransaction,
  setTransactionToCreate: Dispatch<React.SetStateAction<ITransaction>>,
  contextProps: TContextProps
) {
  e.preventDefault();
  const { transactions, setTransactions, token } = contextProps;

  if (transactionToCreate.amount > 0) {
    await addTransaction(transactionToCreate, setTransactions, token);
    setTransactionToCreate(initialValue);
  }
}
