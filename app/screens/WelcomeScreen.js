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

function WelcomeScreen(navigation) {
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
         <Link to="/location">
        <View style={styles.cstbtn}>
          <Text style={styles.appButtonText}>REPORT AN ISSUE</Text>
        </View>
        </Link>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          /* do this */
        }}
      >
         <Link to="/request">
        <View style={styles.cstbtn}>
          <Text style={styles.appButtonText}>MY REQUESTS</Text>
        </View>
        </Link>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          /* do this */
        }}
      >
        <Link to="/news">
          <View style={styles.cstbtn}>
            <Text style={styles.appButtonText}>NEWS</Text>
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

  logo: {
    marginTop: 50,
    width: 150,
    height: 100,
    marginLeft: 120,
    marginRight: 140,
    marginBottom: 40,
  },

  cstbtn: {
    backgroundColor: "#009688",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    elevation: 8,
    height: 70,
  },

  appButtonText: {
    fontSize: 16,
    color: "#fff",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default WelcomeScreen;
