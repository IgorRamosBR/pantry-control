import { createStackNavigator } from "react-navigation-stack";

import { PantryScreen, NewProductScreen } from "../screens";
import DefaultColors from "../constants/DefaultColors";

export default createStackNavigator(
  {
    Pantry: {
      screen: PantryScreen,
      navigationOptions: {
        headerTitle: "Despensa",
      },
    },
    NewProduct: {
      screen: NewProductScreen,
      navigationOptions: {
        headerTitle: "Salvar Produto",
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
