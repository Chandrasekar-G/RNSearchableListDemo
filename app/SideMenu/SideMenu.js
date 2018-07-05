import PropTypes from "prop-types";
import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from "react-native";

class SideMenu extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.sectionHeadingStyle}>Flat List</Text>

            <TouchableHighlight
              style={styles.navItemStyle}
              onPress={this.navigateToScreen("Example1")}
              underlayColor={"#f4cfce"}
            >
              <Text>Example 1</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.navItemStyle}
              onPress={this.navigateToScreen("Example2")}
              underlayColor={"#f4cfce"}
            >
              <Text>Example 2</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.navItemStyle}
              onPress={this.navigateToScreen("Example3")}
              underlayColor={"#f4cfce"}
            >
              <Text>Example 3</Text>
            </TouchableHighlight>
          </View>
          <View>
            <Text style={styles.sectionHeadingStyle}>Section List</Text>
            <View style={styles.navSectionStyle}>
              <TouchableHighlight
                style={styles.navItemStyle}
                onPress={this.navigateToScreen("Example4")}
                underlayColor={"#f4cfce"}
              >
                <Text>Example 4</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.navItemStyle}
                onPress={this.navigateToScreen("Example5")}
                underlayColor={"#f4cfce"}
              >
                <Text>Example 5</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.navItemStyle}
                onPress={this.navigateToScreen("Example6")}
                underlayColor={"#f4cfce"}
              >
                <Text>Example 6</Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navItemStyle: {
    padding: 10
  },
  sectionHeadingStyle: {
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 5,
    color: "#FFF",
    backgroundColor: "#D44744"
  }
});
