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

import { useHistory } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";

import {
  ApolloClient,
  InMemoryCache,
  gql,
  useMutation,
  createHttpLink,
} from "@apollo/client";

const Query = gql`
  {
    locations {
      description
      id
      title
    }
  }
`;

export const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link: createHttpLink({
    uri: "http://10.0.2.2:7000/graphql",
  }),
});

function MyRequest(navigation) {
  const { data, loading, refetch } = useQuery(Query, { client });

  if (loading) {
    return (
      <View style={styles.headtext}>
        <Text style={styles.htext}>My Requests</Text>
      </View>
    );
  }

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
          <Text style={styles.htext}>My Requests</Text>
        </View>
      </View>
      <ScrollView style={styles.scview}>
        {data.locations.map((location) => (
          <View style={styles.nview} key={location.id}>
            <View>
              <Text style={{fontWeight:"bold", fontSize:15}}>{location.title}</Text>
            </View>
            <View>
              <Text style={{textAlign:'left'}}>{location.description}</Text>
            </View>
          </View>
        ))}
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
  rtext: {
    color: "black",
    fontSize: 18,
    marginTop: 12,
    marginLeft: 15,
    textAlign: "left",
    fontWeight: "bold",
  },
  ctext: {
    fontSize: 12,
    textAlign: "left",
    marginTop: 70,
    marginBottom: 5,
  },
  background: {
    flex: 1,
  },
  scview: {},
  nview: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    flexDirection: "column",
    width: "100%",
    height: 95,
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
    width: 400,
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
export default MyRequest;
