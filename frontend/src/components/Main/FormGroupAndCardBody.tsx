import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import { ExportTrackerContext } from "../../context/Context";
import {
  IFormGroupAndCardBodyProp,
  TContextProps,
} from "../../types/transactions-types";
import {
  expenseCategories,
  incomeCategories,
} from "../../utils/categoriesConstants";
import {
  handleChangeForAppInputs,
  handleSubmitForTransaction,
} from "../../utils/util-functions";

export default function FormGroupAndCardBody(props: IFormGroupAndCardBodyProp) {
  const { transactionToCreate, setTransactionToCreate } = props;
  const contextProps = useContext(ExportTrackerContext) as TContextProps;
  return (
    <>
      <div className="form-group">
        <Form
          onSubmit={(e) =>
            handleSubmitForTransaction(
              e,
              transactionToCreate,
              setTransactionToCreate,
              contextProps
            )
          }
        >
          <div className="d-flex justify-content-between type-and-amount-container">
            <Form.Group>
              <Form.Label htmlFor="type">Type</Form.Label>
              <Form.Control
                as="select"
                value={transactionToCreate.type}
                onChange={(e) =>
                  handleChangeForAppInputs(
                    e,
                    transactionToCreate,
                    setTransactionToCreate
                  )
                }
                id="type"
                required
              >
                <option style={{ display: "none" }}></option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="amount">Amount</Form.Label>
              <Form.Control
                as="input"
                value={transactionToCreate.amount}
                onChange={(e) =>
                  handleChangeForAppInputs(
                    e,
                    transactionToCreate,
                    setTransactionToCreate
                  )
                }
                type="number"
                id="amount"
                required
              ></Form.Control>
            </Form.Group>
          </div>
          <Form.Group>
            <Form.Label htmlFor="category">Category</Form.Label>
            <Form.Control
              as="select"
              value={transactionToCreate.category}
              onChange={(e) =>
                handleChangeForAppInputs(
                  e,
                  transactionToCreate,
                  setTransactionToCreate
                )
              }
              id="category"
              required
            >
              <option style={{ display: "none" }}></option>
              {transactionToCreate.type === "income"
                ? incomeCategories.map((c) => (
                    <option key={uuid()} value={c.type}>
                      {c.type}
                    </option>
                  ))
                : expenseCategories.map((c) => (
                    <option key={uuid()} value={c.type}>
                      {c.type}
                    </option>
                  ))}
            </Form.Control>
          </Form.Group>
          <div className="d-flex justify-content-center">
            <button
              className="btn px-4 btn-outline-primary display-center"
              type="submit"
            >
              Create
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}
