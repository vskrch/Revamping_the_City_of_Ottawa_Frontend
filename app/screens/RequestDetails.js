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
    Button,
    ScrollView,
  } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import { TextInput } from "react-native-gesture-handler";
function Requestdetails(navigation) {
  return(
    <ImageBackground
      style={styles.background}
      source={require("../assets/bg_image.jpg")}
      >
       <View style={styles.myheader}>
          <TouchableOpacity
            onPress={() => {
              /* do this */
            }}>
              <Link to="/request">
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
              <View style={styles.headtext}><Text style={styles.htext}>Request Details</Text></View>
         </View>
         <ScrollView style={styles.scview}>
                <View style={styles.nview}>
                        <View style={styles.nw_headlines}>
                            <Text style={{ marginTop: 10,fontWeight: "bold", fontSize: 20, textAlign: "justify", }}>
                                City will open nine weight and cardio rooms on August 4
                            </Text>
                        </View>
                </View>

                <View>
                    <Text style={styles.nw_content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. UtLorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                </View>
                    

         </ScrollView>
    </ImageBackground>
)}
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
     width: '100%',
     marginLeft: 10,
     marginRight: 20,
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

export default  Requestdetails;