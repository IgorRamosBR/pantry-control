import React from 'react';
import { Text, View } from 'react-native';

export default class ShoppingListsScreen extends React.Component {

	constructor(props) {
		super(props);
	}


    render() {
        console.log('passou aqui ');

        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Lista de Compras!</Text>
          </View>
        );
      }
} 
