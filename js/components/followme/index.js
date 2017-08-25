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
  Tab,
  Tabs,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  SwipeRow,
  Right,
  Body,
  Textarea,
  Item,
  Label,
  Input,
  Toast
} from "native-base";

import { TextInput, TimePickerAndroid} from "react-native";

import styles from "./styles";


import TabOne from '../tab/tabOne';
import TabTwo from '../tab/tabTwo';
import TabThree from '../tab/tabThree';

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
    img: pratik,
    name: "Itamar",
    note: "I'm ok, :)",
    time: "3:43 pm",
    isOk: true
  },
  {
    img: sanket,
    name: "Kumar Sanket",
    note: "Every thing is ok..",
    time: "1:12 pm",
    isOk: true
  },
  {
    img: megha,
    name: "Megha",
    note: "There is no issues :)",
    time: "10:03 am",
    isOk: true
  },
  {
    img: atul,
    name: "Atul Ranjan",
    note: "Dont worry!!",
    time: "5:47 am",
    isOk: true
  },
  {
    img: saurabh,
    name: "Saurabh Sahu",
    note: "I need help",
    time: "11:11 pm",
    isOk: false
  },
  {
    img: varun,
    name: "Varun Sahu",
    note: "Help me",
    time: "8:54 pm",
    isOk: false
  }
];

class YokMe extends Component {
  constructor(props) {
    super(props);

    this.test = this.test.bind(this);
  }

  test() {
    try {
      const time = TimePickerAndroid.open({
        is24Hour: true, // Will display '2 PM'
        hour: 0,
        minute: 0
      })
    } catch ({ code, message }) {
      console.warn("Cannot open time picker", message);
    }
  }


  _onAddYok(){
        this.test();
    
  }
  render() {
    return (
      <Container >
        <Header androidStatusBarColor='#323232' style={{backgroundColor:"#37BCBB"}}>
          <Left>
            <Button transparent  onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>YokMe</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("AddFollower")}
            >
              <Icon name="stopwatch" />
            </Button>
          </Right>
        </Header>

        <Content>
        <Container>
        <View>
            

        </View>
        <View style={{ marginBottom: 80 , marginTop:80}}>
						<Button
							style={{ backgroundColor: "#37BCBB", alignSelf: "center" }}
							onPress={() =>{this._onAddYok()}}
						>
							<Text>Yok Me!</Text>
						</Button>
					</View>
        </Container>
        </Content>
        
        
      </Container>
    );
  }
}

export default YokMe;
