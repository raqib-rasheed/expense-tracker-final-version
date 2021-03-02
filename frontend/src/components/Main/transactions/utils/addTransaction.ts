import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { ITransaction } from "../../../../types/transactions-types";
import { getIndividualTransactions } from "./getTransactions";

export async function updateNetTransaction(newT: ITransaction, token: String) {
  await axios({
    method: "patch",
    url: `/netTransactions/${token}`,
    data: newT,
    headers: {
      Authorization: token,
    },
  });
}

export async function addTransaction(
  newT: ITransaction,
  setTransactions: Dispatch<SetStateAction<any>>,
  token: String
) {
  await axios({
    method: "post",
    url: "/transactions",
    data: newT,
    headers: {
      Authorization: token,
    },
  });
  await updateNetTransaction(newT, token);
  const value = await getIndividualTransactions(token);
  return setTransactions(value.data);
}
