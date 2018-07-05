import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "../Components/Header";

class Example1 extends Component {
  render() {
    return (
      <View style={styles.pageContainer}>
        <Header title={"Flat List"} navigation={this.props.navigation}/>
        <Text>Example1</Text>
      </View>
    );
  }
}

export default Example1;

const styles = StyleSheet.create({
  pageContainer: {}
});
