import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
} from "react-native";

function MyHeader(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/bg_image.jpg")}
    >
      <View style={styles.myheader}>
        <Text style={styles.htext}>News</Text>
      </View>

      <ScrollView style={styles.scview}>
        <View style={styles.nview}>
          <View style={styles.dimg}>
            <Text style={styles.dtcontent}>Jul</Text>
            <Text style={styles.dtcontent}>29</Text>
            <Text style={styles.dtcontent}>2020</Text>
          </View>
          <View style={styles.nw_headlines}>
            <Text style={{ marginTop: 10, fontWeight: "bold" }}>
              City will open nine weight and cardio rooms on August 4
            </Text>
            <Text style={styles.ctext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </Text>
          </View>
          <View style={styles.arrimg}>
            <Image
              style={{
                width: 30,
                height: 30,
                marginTop: 35,
                marginRight: 10,
                marginLeft: 5,
              }}
              source={require("../assets/arrow.png")}
            ></Image>
          </View>
        </View>

        <View style={styles.nview}>
          <View style={styles.dimg}>
            <Text style={styles.dtcontent}>Jul</Text>
            <Text style={styles.dtcontent}>29</Text>
            <Text style={styles.dtcontent}>2020</Text>
          </View>
          <View style={styles.nw_headlines}>
            <Text style={{ marginTop: 10, fontWeight: "bold" }}>
              City will open nine weight and cardio rooms on August 4
            </Text>
            <Text style={styles.ctext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </Text>
          </View>
          <View style={styles.arrimg}>
            <Image
              style={{
                width: 30,
                height: 30,
                marginTop: 35,
                marginRight: 10,
                marginLeft: 5,
              }}
              source={require("../assets/arrow.png")}
            ></Image>
          </View>
        </View>

        <View style={styles.nview}>
          <View style={styles.dimg}>
            <Text style={styles.dtcontent}>Jul</Text>
            <Text style={styles.dtcontent}>29</Text>
            <Text style={styles.dtcontent}>2020</Text>
          </View>
          <View style={styles.nw_headlines}>
            <Text style={{ marginTop: 10, fontWeight: "bold" }}>
              City will open nine weight and cardio rooms on August 4
            </Text>
            <Text style={styles.ctext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </Text>
          </View>
          <View style={styles.arrimg}>
            <Image
              style={{
                width: 30,
                height: 30,
                marginTop: 35,
                marginRight: 10,
                marginLeft: 5,
              }}
              source={require("../assets/arrow.png")}
            ></Image>
          </View>
        </View>

        <View style={styles.nview}>
          <View style={styles.dimg}>
            <Text style={styles.dtcontent}>Jul</Text>
            <Text style={styles.dtcontent}>29</Text>
            <Text style={styles.dtcontent}>2020</Text>
          </View>
          <View style={styles.nw_headlines}>
            <Text style={{ marginTop: 10, fontWeight: "bold" }}>
              City will open nine weight and cardio rooms on August 4
            </Text>
            <Text style={styles.ctext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </Text>
          </View>
          <View style={styles.arrimg}>
            <Image
              style={{
                width: 30,
                height: 30,
                marginTop: 35,
                marginRight: 10,
                marginLeft: 5,
              }}
              source={require("../assets/arrow.png")}
            ></Image>
          </View>
        </View>

        <View style={styles.nview}>
          <View style={styles.dimg}>
            <Text style={styles.dtcontent}>Jul</Text>
            <Text style={styles.dtcontent}>29</Text>
            <Text style={styles.dtcontent}>2020</Text>
          </View>
          <View style={styles.nw_headlines}>
            <Text style={{ marginTop: 10, fontWeight: "bold" }}>
              City will open nine weight and cardio rooms on August 4
            </Text>
            <Text style={styles.ctext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </Text>
          </View>
          <View style={styles.arrimg}>
            <Image
              style={{
                width: 30,
                height: 30,
                marginTop: 35,
                marginRight: 10,
                marginLeft: 5,
              }}
              source={require("../assets/arrow.png")}
            ></Image>
          </View>
        </View>

        <View style={styles.nview}>
          <View style={styles.dimg}>
            <Text style={styles.dtcontent}>Jul</Text>
            <Text style={styles.dtcontent}>29</Text>
            <Text style={styles.dtcontent}>2020</Text>
          </View>
          <View style={styles.nw_headlines}>
            <Text style={{ marginTop: 10, fontWeight: "bold" }}>
              City will open nine weight and cardio rooms on August 4
            </Text>
            <Text style={styles.ctext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </Text>
          </View>
          <View style={styles.arrimg}>
            <Image
              style={{
                width: 30,
                height: 30,
                marginTop: 35,
                marginRight: 10,
                marginLeft: 5,
              }}
              source={require("../assets/arrow.png")}
            ></Image>
          </View>
        </View>

        <View style={styles.nview}>
          <View style={styles.dimg}>
            <Text style={styles.dtcontent}>Jul</Text>
            <Text style={styles.dtcontent}>29</Text>
            <Text style={styles.dtcontent}>2020</Text>
          </View>
          <View style={styles.nw_headlines}>
            <Text style={{ marginTop: 10, fontWeight: "bold" }}>
              City will open nine weight and cardio rooms on August 4
            </Text>
            <Text style={styles.ctext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </Text>
          </View>
          <View style={styles.arrimg}>
            <Image
              style={{
                width: 30,
                height: 30,
                marginTop: 35,
                marginRight: 10,
                marginLeft: 5,
              }}
              source={require("../assets/arrow.png")}
            ></Image>
          </View>
        </View>

        <View style={styles.nview}>
          <View style={styles.dimg}>
            <Text style={styles.dtcontent}>Jul</Text>
            <Text style={styles.dtcontent}>29</Text>
            <Text style={styles.dtcontent}>2020</Text>
          </View>
          <View style={styles.nw_headlines}>
            <Text style={{ marginTop: 10, fontWeight: "bold" }}>
              City will open nine weight and cardio rooms on August 4
            </Text>
            <Text style={styles.ctext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </Text>
          </View>
          <View style={styles.arrimg}>
            <Image
              style={{
                width: 30,
                height: 30,
                marginTop: 35,
                marginRight: 10,
                marginLeft: 5,
              }}
              source={require("../assets/arrow.png")}
            ></Image>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  myheader: {
    height: 60,
    marginTop: 30,
    backgroundColor: "black",
  },
  htext: {
    color: "#fff",
    fontSize: 23,
    marginTop: 12,
    marginLeft: 15,
    textAlign: "left",
  },
  ctext: {
    fontSize: 12,
    textAlign: "justify",
    marginBottom: 5,
    marginRight: 10,
  },
  background: {
    flex: 1,
  },
  scview: {},
  nview: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    flexDirection: "row",
    width: "100%",
    height: 100,
  },

  dimg: {
    width: 60,
    height: 100,
    justifyContent: "center",
  },

  arrimg: {
    width: 40,
    height: 100,
  },

  nw_headlines: {
    height: 100,
    width: 300,
  },

  dtcontent: {
    color: "black",
    textAlign: "center",
    marginTop: 1,
    fontWeight: "bold",
  },
});

export default MyHeader;