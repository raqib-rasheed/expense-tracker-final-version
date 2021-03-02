import React from "react";
import Inputs from "./Inputs";
import TransactionsContainer from "./transactions/TransactionsContainer";
import { Card, Col } from "react-bootstrap";

export default function UsersArea() {
  return (
    <>
      <Col xs={{ order: "first" }} sm={12} className="mb-2">
        <Card className="round-corners ">
          <Inputs />
          <TransactionsContainer />
        </Card>
      </Col>
    </>
  );
}
