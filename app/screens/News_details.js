import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

function News_details() {
    return (
      <View style={styles.background}>
        <View style={styles.myheader}>
        <TouchableOpacity
        onPress={() => {
          /* do this */
        }}>
          <Link to="/news">
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
           <View style={styles.headtext}><Text style={styles.htext}>News Details</Text></View>
        </View>    
          

        <ScrollView>
            <View style={styles.nview}>
                <View style={styles.dimg}>
                    <Text style={styles.dtcontent}>Jul</Text>
                    <Text style={styles.dtcontent}>29</Text>
                    <Text style={styles.dtcontent}>2020</Text>
                </View>
                <View style={styles.nw_headlines}>
                    <Text style={{ marginTop: 10,fontWeight: "bold", fontSize: 20, textAlign: "justify" }}>
                        City will open nine weight and cardio rooms on August 4
                    </Text>
                </View>
                <View style={styles.arrimg}>
                </View>
            </View>

            <View>
                <Text style={styles.nw_content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. UtLorem ipsum dolor sit amet, consectetur adipiscing elit</Text>

                <Text style={styles.nw_content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </Text>
                <Text style={styles.nw_content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </Text>
            </View>
            <View>
                <Text style={styles.contact_nw}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa
                </Text>
            </View>
        </ScrollView>
        
      </View>
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
      color: "white",
      fontSize: 23,
      marginTop: 12,
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
      width: 150,
      height: 100,
      
    },
  
    nw_headlines: {
      fontWeight: "bold",
      width: 250,
      textAlign: "center",
      marginLeft: 20
    },

    dtcontent: {
        color: "black",
        textAlign: "center",
        marginTop: 1,
        fontWeight: "bold",
    },

    nw_content: {
        color: "black",
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
    },
  
    bckarw:{
      height: 60,
      width: 60,
      backgroundColor: "black",
    },

    headtext:{
      height: 60,
      width: 200,
      backgroundColor: "black"
    },

    

    contact_nw: {
        color: "black",
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 30,  
    }
});

export default News_details;