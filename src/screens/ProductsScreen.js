import React from 'react';
import { Text, View } from 'react-native';

export default class ProductsScreen extends React.Component {
    
    constructor(props) {
		super(props);
    }
    
    render() {
        console.log('passou aqui 2');
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Produtos</Text>
          </View>
        );
      }
} 
