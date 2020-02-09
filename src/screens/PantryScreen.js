import React from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { TouchableOpacity } from 'react-native'
export default class PantryScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pantry: [
        {
          category: 'Carnes',
          products: [
            {
              id: 1,
              name: 'Contra Filé',
              brand: 'Friboi',
              quantity: 2,
              unit: 'kg',
              image: 'https://www.carone.com.br/media/catalog/product/cache/1/image/580x580/9df78eab33525d08d6e5fb8d27136e95/4/7/4760_B.jpg'
            },
            {
              id: 2,
              name: 'Alcatra',
              brand: 'Friboi',
              quantity: 1,
              unit: 'kg',
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
              image: 'https://www.snsuper.com.br/wp-content/uploads/2018/02/7891035800214.png'
            },
            {
              id: 4,
              name: 'Detergente',
              brand: 'Limpol',
              quantity: 4,
              unit: 'un',
              image: 'https://castronaves.vteximg.com.br/arquivos/ids/170228-1000-1000/1341.jpg?v=636620808049070000'
            }
          ]
        }
      ]
    }
  }

  render() {
    return (
      <Container>
        <Content>
            {this.state.pantry.map((item, index) => {
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
                            <Text note numberOfLines={1}>{product.brand}</Text>
                          </Body>
                          <Right>
                            <TouchableOpacity onPress={() => console.log('plus')}><Icon name='add' style={{fontSize: 22, color: 'black'}}/></TouchableOpacity>
                            <TouchableOpacity onPress={() => console.log('minus')}><Icon name='remove' style={{fontSize: 22, color: 'black'}}/></TouchableOpacity>
                          </Right>
                        </ListItem>
                      </List>
                    ); 
                  })
                  }  
                </List>
              );
            })}
            
        </Content>
      </Container>
    );
  }
} 
