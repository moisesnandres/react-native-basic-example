import React, { Component } from "react";
import { Platform } from "react-native";
import { Drawer, Tabs } from "./config/router";

export default class App extends Component {
  render() {
    if (Platform.OS === "ios") {
      return <Tabs />;
    }
    return <Drawer />;
  }
}
