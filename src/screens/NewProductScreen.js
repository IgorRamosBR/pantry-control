import React, { useState, useCallback } from "react";
import {
  Container,
  Content,
  Form,
  Input,
  Label,
  Item,
  Picker,
  Icon,
  Fab,
} from "native-base";
import { StyleSheet, View } from "react-native";

const dummyCategories = ["Mercearia", "Açouge"];
const dummyUnidade = ["Un", "Kg", "Ml"];

const handlerPriceChange = (price) => {
  price = price.replace(/\D/g, "");
  if (price.length > 0) {
    if (price.length > 2) {
      return `R$${price.slice(0, price.length - 2)},${price.slice(
        price.length - 2,
        price.length
      )}`;
    } else {
      return `R$${price}`;
    }
  } else {
    return "";
  }
};

const NewProductScreen = (props) => {
  const [selectedName, setSelectedName] = useState(undefined);
  const [selectedCategory, setSelectedCategory] = useState("Mercearia");
  const [selectedUnit, setSelectedUnit] = useState("Un");
  const [selectedPrice, setSelectedPrice] = useState(undefined);

  const saveHandler = useCallback(() => {
		console.log(selectedName, selectedCategory, selectedUnit, selectedPrice)
	}, [
    selectedName,
    selectedCategory,
    selectedUnit,
    selectedPrice,
  ]);

  return (
    <Container>
      <Content>
        <Form>
          <View style={Styles.inputContainer}>
            <Item inlineLabel style={Styles.input}>
              <Label>Nome</Label>
              <Input value={selectedName} onChangeText={setSelectedName} />
            </Item>
          </View>

          <View style={Styles.inputContainer}>
            <Item picker style={Styles.picker}>
              <Picker
                mode="dropdown"
                selectedValue={selectedCategory}
                onValueChange={(value) => setSelectedCategory(value)}
              >
                {dummyCategories.map((category, index) => {
                  return (
                    <Picker.Item
                      label={category}
                      value={category}
                      key={category}
                    />
                  );
                })}
              </Picker>
            </Item>
          </View>

          <View
            style={{ ...{ flexDirection: "row" }, ...Styles.inputContainer }}
          >
            <Item inlineLabel style={{ ...Styles.input, ...{ flex: 1 } }}>
              <Label>Quantidade</Label>
              <Input />
            </Item>
            <View
              style={{ ...Styles.inputContainer, ...{ flex: 1, marginTop: 5 } }}
            >
              <Item picker style={Styles.picker}>
                <Picker
                  mode="dropdown"
                  selectedValue={selectedUnit}
                  onValueChange={(value) => setSelectedUnit(value)}
                >
                  {dummyUnidade.map((unidade, index) => {
                    return (
                      <Picker.Item
                        label={unidade}
                        value={unidade}
                        key={unidade}
                      />
                    );
                  })}
                </Picker>
              </Item>
            </View>
          </View>

          <View style={Styles.inputContainer}>
            <Item inlineLabel style={Styles.input}>
              <Label>Preço</Label>
              <Input
                value={selectedPrice}
                onChangeText={(price) => {
                  setSelectedPrice(handlerPriceChange(price));
                }}
                keyboardType="numeric"
              />
            </Item>
          </View>
        </Form>
      </Content>
      <Fab
        direction="up"
        style={{ backgroundColor: "#4A148C" }}
        position="bottomRight"
        onPress={() => {
          saveHandler();
        }}
      >
        <Icon name="md-checkmark" />
      </Fab>
    </Container>
  );
};

const Styles = StyleSheet.create({
  inputContainer: {
    width: "95%",
  },
  input: {
    paddingLeft: 7,
  },
  picker: {
		marginLeft: 15,
  },
});

export default NewProductScreen;
