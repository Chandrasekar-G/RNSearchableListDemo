import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "../Components/Header";

class Page1 extends Component {
  render() {
    return (
      <View style={styles.pageContainer}>
        <Header title={"Page1"} navigation={this.props.navigation}/>
        <Text>Page1</Text>
      </View>
    );
  }
}

export default Page1;

const styles = StyleSheet.create({
  pageContainer: {}
});
