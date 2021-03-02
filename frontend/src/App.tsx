import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginPage from "./loginPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthenticatedApp from "./AuthenticatedApp";

import { Redirect } from "react-router-dom";
import { getIndividualTransactions } from "./components/Main/transactions/utils/getTransactions";
import { ExportTrackerContext } from "./context/Context";
import { TContextProps } from "./types/transactions-types";

function App() {
  const [logged, setLogged] = useState(false);
  const isLogged = window.localStorage.getItem("logged");
  const { token, setTransactions } = useContext(
    ExportTrackerContext
  ) as TContextProps;
  useEffect(() => {
    getIndividualTransactions(token).then((res) => setTransactions(res.data));
  }, [setTransactions, token]);

  if (!logged) {
    return <LoginPage setLogged={setLogged} />;
  }
  return (
    <>
      <Router>
        <Route path="/app">
          <AuthenticatedApp />
        </Route>
        {isLogged && <Redirect to="/app" />};
      </Router>
    </>
  );
}

export default App;
