import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import ShoppingNavigator from "./ShoppingNavigator";
import PantryNavigator from "./PantryNavigator";
import HistoryNavigator from "./HistoryNavigator"

export default createAppContainer(
  createDrawerNavigator({
    ShoppingLists: {
      screen: ShoppingNavigator,
      navigationOptions: {
        drawerLabel: "Lista de Compras",
      },
    },
    History: {
      screen: HistoryNavigator,
      navigationOptions:{
        drawerLabel: "Histórico de Compras"
      }
    },
    Pantry: {
      screen: PantryNavigator,
      navigationOptions: {
        drawerLabel: "Despensa",
      },
    },
  })
);
