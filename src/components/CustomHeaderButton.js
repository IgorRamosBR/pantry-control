import React from "react";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

const buttonComponent = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={30}
      color="white"
    />
  );
};

export default (props) => {
  return (
    <HeaderButtons HeaderButtonComponent={buttonComponent}>
      <Item title={props.icon} iconName={props.icon} onPress={props.onPress} />
    </HeaderButtons>
  );
};
