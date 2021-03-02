import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { ExportTrackerContext } from "./context/Context";
import { TContextProps } from "./types/transactions-types";
import {
  handleChangeLoginFormChange,
  handleLoginCredentialSubmit,
} from "./utils/util-functions";

type LoginPageType = {
  setLogged: Dispatch<SetStateAction<boolean>>;
};

export default function LoginPage(props: LoginPageType) {
  const { setLogged } = props;
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const contextProps = useContext(ExportTrackerContext) as TContextProps;
  const { setToken } = contextProps;
  const [error, setError] = useState(false);

  return (
    <div className="loginpage-container">
      <Card style={{ width: "60%" }}>
        <Card.Body>
          <Card.Title className="text-center text-info">
            Login to continue
          </Card.Title>
          <form
            onSubmit={(e) =>
              handleLoginCredentialSubmit({
                e,
                values,
                setLogged,
                setToken,
                setError,
              })
            }
          >
            <Form.Group>
              <Form.Control
                as="input"
                type="text"
                name="email"
                value={values.email}
                onChange={(e) =>
                  handleChangeLoginFormChange({ e, values, setValues })
                }
                placeholder="Email"
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="input"
                type="text"
                name="password"
                value={values.password}
                onChange={(e) =>
                  handleChangeLoginFormChange({ e, values, setValues })
                }
                placeholder="Password"
                required
              ></Form.Control>
            </Form.Group>
            {error && (
              <p className="text-danger">Password and email don't match...</p>
            )}
            <div className="d-flex justify-content-center">
              <Button type="submit" variant="secondary">
                Submit
              </Button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}
