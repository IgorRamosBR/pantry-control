import React from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Icon, Fab, Footer } from 'native-base';
import { TouchableOpacity, View, StyleSheet } from 'react-native'

import { CustomHeaderButton } from '../components';
import DefaultColors from "../constants/DefaultColors"
 
const ShoppingListScreen = (props) => {
    const pantry = [
      {
        totalPrice: "100,00",
        category: 'Carnes',
        products: [
          {
            id: 1,
            name: 'Contra Filé',
            brand: 'Friboi',
            quantity: 2,
            unit: 'kg',
            price: "13,33",
            image: 'https://www.carone.com.br/media/catalog/product/cache/1/image/580x580/9df78eab33525d08d6e5fb8d27136e95/4/7/4760_B.jpg'
          },
          {
            id: 2,
            name: 'Alcatra',
            brand: 'Friboi',
            quantity: 1,
            unit: 'kg',
            price: "10,12",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUmdtCfJ8cdKy0QXT9jfrVAS7AI5kMKtAHBpUEpL1xop_EdkoO&s'
          }
        ]
      },
      {
        category: 'Limpeza',
        products: [
          {
            id: 3,
            name: 'Desengordurante',
            brand: 'Veja',
            quantity: 1,
            unit: 'un',
            price: "2,99",
            image: 'https://www.snsuper.com.br/wp-content/uploads/2018/02/7891035800214.png'
          },
          {
            id: 4,
            name: 'Detergente',
            brand: 'Limpol',
            quantity: 4,
            unit: 'un',
            price: "1,33",
            image: 'https://castronaves.vteximg.com.br/arquivos/ids/170228-1000-1000/1341.jpg?v=636620808049070000'
          }
        ]
      }
    ]

    return (
      <Container>
        <Content>
            {pantry.map((item, index) => {
              return (
                <List key={index}>
                  <ListItem itemDivider>
                    <Text>{item.category}</Text>
                  </ListItem>
                  {item.products.map((product, index) => {
                    return (
                      <List key={index}>
                        <ListItem thumbnail>
                          <Left>
                            <Thumbnail square source={{ uri: product.image }} />
                          </Left>
                          <Body>
                            <Text>{product.name} ({product.quantity})</Text>
                            <Text note numberOfLines={1}>{product.quantity}{product.unit} x R${product.price}</Text>
                          </Body>
                        </ListItem>
                      </List>
                    ); 
                  })
                  }  
                </List>
              );
            })}
        </Content>
        <View>
          <Fab direction="up" style={styles.fab} position="bottomRight"  onPress={() => {props.navigation.navigate('NewProduct')}}>
            <Icon name="add"/>
          </Fab>
        </View>
        <View style={styles.footer}>
          <View style={{flexDirection: "row"}}>
            <Icon name="md-calculator" style={styles.footerIcon}></Icon>
            <View>
              <Text style={styles.footerText}>Total</Text>
              <Text style={styles.footerPrice}>R$  0,00</Text>
            </View>
          </View>

          <View style={{flexDirection: "row"}}>
            <Icon name="md-cart" style={styles.footerIcon}></Icon>
            <View>
              <Text style={styles.footerText}>Carrinho</Text>
              <Text style={styles.footerPrice}>R$  0,00</Text>
            </View>
          </View>
        </View>
      </Container>
    );
}

ShoppingListScreen.navigationOptions = (navigateData) => {
  return {
    headerLeft: () => (
     <CustomHeaderButton icon={"md-menu"} onPress={() => navigateData.navigation.toggleDrawer()}/>
    )
  };
};

const styles = StyleSheet.create({
  fab:{
    backgroundColor: DefaultColors.HEADER
  },
  footer: {
    backgroundColor: DefaultColors.HEADER,
    height: "9%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 6
  },
  footerText:{
    color: "white",
    fontSize:14
  },
  footerPrice: {
    color: "white"
  },
  footerIcon:{
    color: "white",
    fontSize: 40,
    marginRight: 5
  }
})

export default ShoppingListScreen;