import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";


function LoginScreen(navigation) {

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/bg_image.jpg")}
    >
      <Image style={styles.logo} source={require("../assets/logo.png")} />

      <TouchableOpacity
        onPress={() => {
          /* do this */
        }}
      >
        <Link to="/loginpg">
          <View style={styles.lgbtn}>
            <Text style={styles.appButtonText}>LOG IN</Text>
          </View>
        </Link>
      </TouchableOpacity>
      <Text style={styles.txtbx}>OR</Text>
      <TouchableOpacity
        onPress={() => {
          /* do this */
        }}
      >
        <Link to="/signinpg">
          <View style={styles.sgbtn}>
            <Text style={styles.appButtonText}>SIGN UP</Text>
          </View>
        </Link>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  myheader: {
    height: 60,
    marginTop: 30,
    backgroundColor: "black",
    flexDirection: "row",
    width: "100%",
  },

  htext: {
    color: "#fff",
    fontSize: 23,
    marginTop: 12,
    marginLeft: 15,
    textAlign: "left",
  },

  bckarw: {
    height: 60,
    width: 60,
    backgroundColor: "black",
  },

  headtext: {
    height: 60,
    width: 200,
    backgroundColor: "black",
  },

  logo: {
    marginTop: 70,
    width: 150,
    height: 100,
    marginLeft: 120,
    marginRight: 140,
    marginBottom: 40,
  },

  lgbtn: {
    backgroundColor: "#009688",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
    elevation: 8,
    height: 70,
  },

  sgbtn: {
    backgroundColor: "#009688",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginTop: 0,
    marginLeft: 40,
    marginRight: 40,
    elevation: 8,
    height: 70,
  },

  txtbx: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
    fontSize: 16,
    textTransform: "uppercase",
  },

  appButtonText: {
    fontSize: 16,
    color: "#fff",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default LoginScreen;
