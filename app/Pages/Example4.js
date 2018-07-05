import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "../Components/Header";

class Example4 extends Component {
  render() {
    return (
      <View style={styles.pageContainer}>
        <Header title={"Section List"} navigation={this.props.navigation}/>
        <Text>Example4</Text>
      </View>
    );
  }
}

export default Example4;

const styles = StyleSheet.create({
  pageContainer: {}
});
