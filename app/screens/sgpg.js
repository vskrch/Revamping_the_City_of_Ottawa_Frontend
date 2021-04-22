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
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import { TextInput } from "react-native-gesture-handler";

import { useHistory } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  gql,
  useMutation,
  createHttpLink,
} from "@apollo/client";

const mutation = gql`
  mutation($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      id
    }
  }
`;
export const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link: createHttpLink({
    uri: "http://localhost:7101/graphql",
  }),
});

function SigninPage(navigation) {
  const history = useHistory();

  const [email, onChangeTextemail] = React.useState("");
  const [password, onChangeTextpassword] = React.useState("");
  const [confirmpassword, onChangeTextconfirmpassword] = React.useState("");

  const [createUser] = useMutation(mutation, { client });

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
          <Link to="/">
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
          <Text style={styles.htext}>Let's Start</Text>
        </View>
      </View>
      <View style={styles.lgtext}>
        <Text style={styles.lgntext}>SIGN IN</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={"Email"}
          value={email}
          onChangeText={(text) => onChangeTextemail(text)}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(text2) => onChangeTextpassword(text2)}
          value={password}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="confirm password"
          secureTextEntry={true}
          onChangeText={(text1) => onChangeTextconfirmpassword(text1)}
          value={confirmpassword}
        ></TextInput>
      </View>
      <TouchableOpacity
        onPress={() => {
          /* do this */
          createUser({
            variables: { email, password },
          }).then(
            (data) => {
              console.log(data);
              history.push("/");
            },
            (data) => {
              console.error(data);
            }
          );
        }}
      >
        <View style={styles.lgbtn}>
          <Text style={styles.appButtonText}>Submit</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  lgtext: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },

  lgntext: {
    fontSize: 23,
    fontWeight: "bold",
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
    marginTop: 20,
    width: 150,
    height: 100,
    marginLeft: 120,
    marginRight: 140,
    marginBottom: 10,
  },

  lgbtn: {
    backgroundColor: "#009688",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginTop: 40,
    marginLeft: 100,
    marginRight: 30,
    width: 200,
    height: 50,
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

  container: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 30,
  },
});

export default SigninPage;
