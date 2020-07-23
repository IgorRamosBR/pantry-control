import { createStackNavigator } from "react-navigation-stack";

import { ShoppingListScreen, NewProductScreen } from "../screens";
import DefaultColors from "../constants/DefaultColors";

export default createStackNavigator(
  {
    ShoppingList: {
      screen: ShoppingListScreen,
      navigationOptions: {
        headerTitle: "Lista de Compras",
      },
    },
    NewProduct: {
      screen: NewProductScreen,
      navigationOptions :{
        headerTitle: "Adicionar Produto"
      }
    }
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
