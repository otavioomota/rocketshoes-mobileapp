import React from "react";

import { createAppContainer, createStackNavigator } from "react-navigation";
import Main from "./pages/Main";
import Cart from "./pages/Cart";

import Header from "./components/Header/Header";

const routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
      cardStyle: {
        backgroundColor: "#141419",
      },
    }
  )
);

export default routes;
