import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./store/store";
import "reset.css";
import theme from "./App/style/theme/theme.js";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
