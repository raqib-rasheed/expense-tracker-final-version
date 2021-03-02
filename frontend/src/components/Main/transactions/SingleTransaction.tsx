import React, { useContext } from "react";
import removeTransaction from "./utils/removeTransaction";
import { ExportTrackerContext } from "../../../context/Context";
import { TContextPropsForFinalTransactions } from "../../../types/transactions-types";
import { FaTrash } from "react-icons/fa";
import { v4 as uuid } from "uuid";

export default function SingleTransaction() {
  const { transactions, setTransactions, token } = useContext(
    ExportTrackerContext
  ) as TContextPropsForFinalTransactions;
  return (
    <>
      {transactions.map((item) => {
        const index = item.createdAt.indexOf("T");
        const date = item.createdAt.split("").slice(0, index).join("");
        return (
          <div
            key={uuid()}
            className={`round-corners single-transaction-container ${item.type}`}
            id={item._id}
          >
            <div className="transaction-category">
              <span id={item._id}>{item.category}</span>
              <div className="display-date">{date}</div>
            </div>
            <div className="transaction-amount">
              <span id={item._id}>₹{item.amount}</span>
            </div>
            <FaTrash
              id={item._id}
              onClick={() =>
                removeTransaction(item._id, token, setTransactions)
              }
            ></FaTrash>
          </div>
        );
      })}
    </>
  );
}
