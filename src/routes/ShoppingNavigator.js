import { createStackNavigator } from "react-navigation-stack";

import { PurchaseHistory } from "../screens";
import DefaultColors from "../constants/DefaultColors";

export default createStackNavigator(
  {
    PurchaseHistory: {
      screen: PurchaseHistory,
      navigationOptions: {
        headerTitle: "Histórico de Compras",
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: DefaultColors.HEADER,
      },
      headerTintColor: "#fff",
    },
  }
);
