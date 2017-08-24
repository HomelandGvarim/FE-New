const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flexDirection: 'row',
    flex: 1,
    marginTop: deviceHeight / 8,
    
    },
  logo: {
    position: "absolute",
    left: Platform.OS === "android" ? 130 : 50,
    top: Platform.OS === "android" ? 35 : 60,
    width: 100,
    height: 100
  },
  notOklogo: {
    left: Platform.OS === "android" ? 30 : 50,
    top: Platform.OS === "android" ? 0 : 60,
    width: 100,
    height: 100,
    
  },
  oklogo: {
    left: Platform.OS === "android" ? 60 : 50,
    top: Platform.OS === "android" ? 0 : 60,
    width: 100,
    height: 100
  },
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  }
};
