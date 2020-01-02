import React from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Dimensions } from 'react-native';

export default class ShoppingListsScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      shoppingLists: [
        {
          id: 0,
          name: 'Compras de mês',
          market: {
            name: 'Guanabara',
            logo: 'https://acgnews.com.br/wp-content/uploads/2018/02/guanabara.jpg'
          },
          date: '01/03/2019',
          totalPrice: 'R$100,00'
        },
        {
          id: 1,
          name: 'Carnes',
          market: {
            name: 'Assaí',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Assai.svg/1280px-Assai.svg.png'
          },
          date: '15/03/2019',
          totalPrice: 'R$100,00'
        },
        {
          id: 2,
          name: 'Compras de mês',
          market: {
            name: 'Guanabara',
            logo: 'https://acgnews.com.br/wp-content/uploads/2018/02/guanabara.jpg'
          },
          date: '01/04/2019',
          totalPrice: 'R$100,00'
        }
      ]
    }

  }


  render() {
    return (
      <Container>
        <Content>
          {this.state.shoppingLists.map((item, index) => {
            return (
              <Card key={index}>
                <CardItem>
                  <CardItem cardBody>
                    <Image source={{ uri: item.market.logo }} style={{ height: 200, width: null, flex: 1 }} />
                  </CardItem>
                  <Left>
                    <Body>
                      <Text>{item.name}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Left>
                    <Body>
                      <Text style={{ fontSize: 20, fontWeight: '700' }}>Compras de Mês</Text>
                      <Text note>{item.date}</Text>
                    </Body>
                  </Left>
                  <Right>
                    <Text>{item.totalPrice}</Text>
                  </Right>
                </CardItem>
              </Card>
            )
          })}
        </Content>
      </Container>
    );
  }
}
const deviceWidth = Dimensions.get('window').width;
