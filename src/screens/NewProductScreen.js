import React from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Icon, Form, Input, Label, Item } from 'native-base';

export default class NewProductScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Content>
			<Form>
				<Item stackedLabel>
					<Label>Nome</Label>
					<Input />
				</Item>
				<Item stackedLabel>
					<Label>Marca</Label>
					<Input />
				</Item>
				<Item stackedLabel>
					<Label>Categoria</Label>
					<Input />
				</Item>
				<Item stackedLabel>
					<Label>Quantidade</Label>
					<Input />
				</Item>
			</Form>
		</Content>
	</Container>
	)	
  }
}