import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "../Components/Header";

class Example3 extends Component {
  render() {
    return (
      <View style={styles.pageContainer}>
        <Header title={"Flat List"} navigation={this.props.navigation}/>
        <Text>Example3</Text>
      </View>
    );
  }
}

export default Example3;

const styles = StyleSheet.create({
  pageContainer: {}
});
