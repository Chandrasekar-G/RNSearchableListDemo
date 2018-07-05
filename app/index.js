import React, { Component } from "react";
import Router from "./routes";
import { AppRegistry, StatusBar } from "react-native";

export default class CustomDrawer extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return <Router />;
  }
}

AppRegistry.registerComponent("CustomDrawer", () => CustomDrawer);
