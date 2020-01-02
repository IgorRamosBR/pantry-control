import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import ShoppingListsScreen from './src/screens/ShoppingListsScreen'
import ProductsScreen from "./src/screens/ProductsScreen";

const ShoppingListsStack = createStackNavigator(
  {
    ShoppingLists: { 
      screen: ShoppingListsScreen,
      navigationOptions:{
        headerTitle : 'Lista de Compras',
      }            
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#4A148C',
      },
      headerTintColor: '#fff'
    }
  }
)

const ProductsStack = createStackNavigator(
  {
    Products: { 
      screen: ProductsScreen,
      navigationOptions:{
        headerTitle : 'Produtos',
      } 
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#4A148C',
      },
      headerTintColor: '#fff'
    }
  }
)

const TabStack = createBottomTabNavigator(
  {
    ShoppingLists: {
      screen: ShoppingListsStack,
      navigationOptions: {
        tabBarLabel: 'Lista de Compras',
      },
    },
    Products: {
      screen: ProductsStack,
      navigationOptions: {
        tabBarLabel: 'Produtos',
      },
    }
  },
  { 
    defaultNavigationOptions: ({ navigation }) => (
      {
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }
    ),
    tabBarOptions: {
        showLabel: true,
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#808080',
        style: {
            backgroundColor: '#4A148C',
            alignSelf: 'center',
            padding: 5
        }
    }
  });

  const MainTabsStack = createStackNavigator( {
      MainTabs: {
        screen: TabStack,
        navigationOptions: {
          headerShown: false,
        }
      }
  });

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let iconName;
  if (routeName === 'ShoppingLists') {
    iconName = 'format-list-bulleted';
  } else if (routeName === 'Products') {
    iconName = 'food-fork-drink';
  }

  return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;
};


export default createAppContainer(
  MainTabsStack
);
