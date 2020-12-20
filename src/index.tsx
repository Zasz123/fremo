import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

// redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./modules";

// style
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
import { ThemeProvider } from "styled-components";

import { BrowserRouter } from "react-router-dom";

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
