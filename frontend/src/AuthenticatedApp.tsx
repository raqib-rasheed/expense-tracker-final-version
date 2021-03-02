import {
  ErrorPanel,
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";
import React from "react";
import { Container, Row } from "react-bootstrap";
import Chart from "./components/chart/Chart";
import UsersArea from "./components/Main/UsersArea";

// interface IAuthenticatedApp {
//   token: String;
// }

export default function AuthenticatedApp() {
  const [totalAmount, setTotalAmount] = React.useState(0);
  const savings = totalAmount >= 0;

  return (
    <>
      <Container className="wrapper">
        <h3
          className={savings ? "income total-amount" : "expense total-amount"}
        >
          Total : ₹{" "}
          <span className={totalAmount <= 0 ? "text-danger" : "text-success"}>
            {totalAmount}
          </span>
        </h3>
        <Row lg={3}>
          <Chart title="income" setTotalAmount={setTotalAmount} />
          <UsersArea />
          <Chart title="expense" setTotalAmount={setTotalAmount} />
        </Row>
      </Container>
      <div className="d-flex justify-content-center">
        <PushToTalkButtonContainer>
          <PushToTalkButton size="4rem" captureKey=" " />
          <ErrorPanel />
        </PushToTalkButtonContainer>
      </div>
    </>
  );
}
