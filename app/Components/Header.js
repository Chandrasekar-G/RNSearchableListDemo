import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

class Header extends Component {
  static defaultProps = {
    title: "RNSearchableDemo"
  };

  static propTypes = {
    title: PropTypes.string
  };

  render() {
    return (
      <View style={styles.header}>
        <Icon
          style={styles.hamburger}
          name="menu"
          size={30}
          color="#FFF"
          onPress={() => this.props.navigation.navigate("DrawerOpen")}
        />
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: "#D44744",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  hamburger: {
    flex: 2,
    marginLeft: 10
  },
  title: {
    flex: 10,
    color: "#FFF",
    fontSize: 25,
    alignSelf: "center"
  }
});
