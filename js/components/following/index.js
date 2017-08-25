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
  Body
} from "native-base";

import { TimePickerAndroid } from "react-native";

import styles from "./styles";

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

class Following extends Component {
  constructor(props) {
    super(props);

    this.test = this.test.bind(this);
  }

  test() {
    try {
      const { action, hour, minute } = TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: false // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        // Selected hour (0-23), minute (0-59)
      }
    } catch ({ code, message }) {
      console.warn("Cannot open time picker", message);
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header androidStatusBarColor='#323232' style={{backgroundColor:"#37BCBB"}}>
          <Left>
            <Button transparent  onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Following</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("AddFollower")}
            >
              <Icon name="eye" />
            </Button>
          </Right>
        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <SwipeRow
                onPress={() => alert("Poked ")}
                rightOpenValue={-75}
                leftOpenValue={75}
                right={
                  <Button onPress={() => alert("Poked")}>
                    <Icon active name="paper-plane" />
                  </Button>
                }
                left={
                  <Button danger onPress={() => alert("Remove")}>
                    <Icon active name="trash" />
                  </Button>
                }
                body={
                  <View>
                    <Left
                      style={{
                        alignSelf: "flex-start",
                        flexDirection: "row"
                      }}
                    >
                      <Thumbnail small source={data.img} />
                      <Text style={{ marginLeft: 10 }}>
                        {data.name}
                      </Text>
                    </Left>

                    <Body style={{ flexDirection: "column" }}>
                      <Text numberOfLines={1} note>
                        {data.isOk
                          ? <Thumbnail small source={BlueV} />
                          : <Thumbnail small source={RedX} />}
                        {data.note}

                        <Text
                          note
                          style={{
                            flexDirection: "column",
                            alignSelf: "flex-end"
                          }}
                        >
                          {data.time}
                        </Text>
                      </Text>
                      <Button onPress={this.test} style={{backgroundColor:"#37BCBB"}}>
                        <Text>Set Time</Text>
                      </Button>
                    </Body>
                  </View>
                }
              />}
          />
        </Content>
      </Container>
    );
  }
}

export default Following;
