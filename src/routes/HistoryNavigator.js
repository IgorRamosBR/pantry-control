import { createStackNavigator } from "react-navigation-stack";
import { PurchaseHistoryScreen } from "../screens";
import DefaultColors from "../constants/DefaultColors";

export default createStackNavigator(
  {
    PurchaseHistory: {
      screen: PurchaseHistoryScreen,
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
