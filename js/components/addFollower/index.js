import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Image,
  View,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  SwipeRow,
  Right,
  Body
} from "native-base";

import styles from "./style";

const pratik = require("../../../img/contacts/pratik.png");
const sanket = require("../../../img/contacts/sanket.png");
const megha = require("../../../img/contacts/megha.png");
const atul = require("../../../img/contacts/atul.png");
const saurabh = require("../../../img/contacts/saurabh.png");
const varun = require("../../../img/contacts/varun.png");
const BlueV = require("../../../img/BlueV.png");
const RedX = require("../../../img/RedX.png");

const datas = [
  {
    img: sanket,
    name: "Omri"
  },
  {
    img: atul,
    name: "Amos"
  },
  {
    img: saurabh,
    name: "Daniel"
  },
  {
    img: varun,
    name: "Yuval"
  }
];

class AddFollower extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header androidStatusBarColor='#323232' style={{backgroundColor:"#37BCBB"}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Contacts</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem avatar onPress={() => {}}>
                <Left>
                  <Thumbnail small source={data.img} />
                </Left>
                <Body>
                  <Text style={{marginTop:22}}>
                    {data.name}
                  </Text>
                </Body>
                <Right>
                    <Button onPress={() => alert("Added contact")}>
                    <Icon active name="eye" />
                  </Button>
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default AddFollower;