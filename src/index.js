import "intl";
import "intl/locale-data/jsonp/pt-BR";

import React, { Fragment } from "react";

import { Provider } from "react-redux";
import { StatusBar } from "react-native";
import "./config/ReactotronConfig";

import store from "./store/store";

import Routes from "./routes";

const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="#141419" />
        <Routes />
      </Provider>
    </Fragment>
  );
};

export default App;
