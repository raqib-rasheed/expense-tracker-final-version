import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SpeechProvider } from "@speechly/react-client";
import { Provider } from "./context/Context";

ReactDOM.render(
  <React.StrictMode>
    <SpeechProvider
      appId="a5de34c8-f718-4c2d-bfbd-a00d57470aff"
      language="en-US"
    >
      <Provider>
        <App />
      </Provider>
    </SpeechProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
