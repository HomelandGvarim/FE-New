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
    notificationTime:"",
    isOk: true
  },
  {
    img: sanket,
    name: "Kumar",
    note: "Every thing is ok..",
    time: "1:12 pm",
    isOk: true
  },
  {
    img: megha,
    name: "Megha",
    note: "There are no issues :)",
    time: "10:03 am",
    isOk: true
  },
  {
    img: atul,
    name: "Atul",
    note: "Dont worry!!",
    time: "5:47 am",
    isOk: true
  },
  {
    img: saurabh,
    name: "Saurabh",
    note: "I need help",
    time: "11:11 pm",
    isOk: false
  },
  {
    img: varun,
    name: "Varun",
    note: "Help me",
    time: "8:54 pm",
    isOk: false
  }
];

class Following extends Component {
  constructor(props) {
    super(props);

    this.test = this.test.bind(this);
    this.setTime = this.setTime.bind(this);
  }

  test(user) {
    Alert("not alerting" + user.name);
  }

  setTime(user) {
    try {
      const time = TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: false // Will display '2 PM'
      }).then((onFulfill, onReject)=>
    {
        alert(onFulfill.hour);
      if (action !== TimePickerAndroid.dismissedAction) {
        // Selected hour (0-23), minute (0-59)
      }
    });
    } catch ({ code, message }) {
      console.warn("Cannot open time picker", message);
    } 
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header
          androidStatusBarColor="#323232"
          style={{ backgroundColor: "#37BCBB" }}
        >
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
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
                  <Button
                    style={{ backgroundColor: "#646464" }}
                    onPress={(data)=>this.setTime(data)}
                  >
                    <Icon active name="settings" />
                  </Button>
                }
                body={
                  <View style={{ flexDirection: "row" }}>
                    <Left style={{ flexDirection: "column" }}>
                      <Thumbnail small source={data.img} />

                      <Text>
                        {data.name}
                      </Text>
                    </Left>

                    <Body style={{ flexDirection: "row", alignSelf: "center" }}>
                      <Text note>
                        {data.note}
                      </Text>
                    </Body>
                    <Right style={{ flexDirection: "column" }}>
                      <Text note>
                        {data.time}
                        {data.isOk
                          ? <Thumbnail small source={BlueV} />
                          : <Thumbnail small source={RedX} />}
                      </Text>
                    </Right>
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
