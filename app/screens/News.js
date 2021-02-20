import * as React from "react";
import {
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Button,
  View,
  Text,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeRouter, Route, Link } from "react-router-native";

function News() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/bg_image.jpg")}
    >
      <View style={styles.myheader}>
        <TouchableOpacity
          onPress={() => {
            /* do this */
          }}
        >
          <Link to="/welcome">
            <View style={styles.bckarw}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginTop: 14,
                  marginLeft: 5,
                }}
                source={require("../assets/back_arrow.png")}
              ></Image>
            </View>
          </Link>
        </TouchableOpacity>
        <View style={styles.headtext}>
          <Text style={styles.htext}>News</Text>
        </View>
      </View>

      <ScrollView style={styles.scview}>
        <TouchableOpacity
          onPress={() => {
            /* do this */
          }}
        >
          <Link to="/news_details">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut
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
          </Link>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            /* do this */
          }}
        >
          <Link to="/news_details">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut
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
          </Link>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            /* do this */
          }}
        >
          <Link to="/news_details">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut
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
          </Link>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            /* do this */
          }}
        >
          <Link to="/news_details">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut
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
          </Link>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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
});
export default News;
