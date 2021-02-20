import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MyHeader from "./app/screens/MyHeader";
import LoginScreen from "./app/screens/Login";
import News from "./app/screens/News";
import News_details from "./app/screens/News_details";

import { NativeRouter, Route, Link } from "react-router-native";
import LoginPage from "./app/screens/lgpg";
import SigninPage from "./app/screens/sgpg";
import LocationPage from "./app/screens/location";
import MyRequest from "./app/screens/MyRequests";
import Requestdetails from "./app/screens/RequestDetails";

export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={LoginScreen} />
      <Route exact path="/loginpg" component={LoginPage} />
      <Route exact path="/signinpg" component={SigninPage} />
      <Route exact path="/news" component={News} />
      <Route exact path="/welcome" component={WelcomeScreen} />
      <Route exact path="/news_details" component={News_details} />
      <Route exact path="/location" component={LocationPage} />
      <Route exact path="/request" component={MyRequest} />
      <Route exact path="/request_details" component={Requestdetails} />
    </NativeRouter>
  );
}
