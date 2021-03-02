import axios from "axios";
import { Dispatch } from "react";
import { updateNetTransaction } from "./addTransaction";
import { getIndividualTransactions } from "./getTransactions";

export default async function removeTransaction(
  id: string,
  token: String,
  setTransactions: Dispatch<any>
) {
  const { data: removedTransaction } = await axios({
    method: "delete",
    url: `/transactions/${id}`,
  });
  removedTransaction.amount *= -1;
  updateNetTransaction(removedTransaction, token);
  const transactionAfterDeletion = await getIndividualTransactions(token);
  console.log(transactionAfterDeletion);
  setTransactions(transactionAfterDeletion.data);
}
