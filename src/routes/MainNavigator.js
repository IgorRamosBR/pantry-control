import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import ShoppingNavigator from "./ShoppingNavigator";
import PantryNavigator from "./PantryNavigator";

export default createAppContainer(
  createDrawerNavigator({
    ShoppingLists: {
      screen: ShoppingNavigator,
      navigationOptions: {
        drawerLabel: "Historico de Compras",
      },
    },
    Pantry: {
      screen: PantryNavigator,
      navigationOptions: {
        drawerLabel: "Despensa",
      },
    },
  })
);
