import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "../Components/Header";

class Example2 extends Component {
  render() {
    return (
      <View style={styles.pageContainer}>
        <Header title={"Flat List"} navigation={this.props.navigation}/>
        <Text>Example2</Text>
      </View>
    );
  }
}

export default Example2;

const styles = StyleSheet.create({
  pageContainer: {}
});
