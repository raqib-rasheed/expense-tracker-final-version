import React, { useContext } from "react";
import { ExportTrackerContext } from "../../../context/Context";
import { TContextProps } from "../../../types/transactions-types";

import SingleTransaction from "./SingleTransaction";

const TransactionsContainer = () => {
  const { transactions } = useContext(ExportTrackerContext) as TContextProps;
  return (
    <>
      {transactions.length > 0 ? (
        <div
          className="transactions-container"
          style={{ width: "100%", height: "7.75rem" }}
        >
          <SingleTransaction />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default TransactionsContainer;
