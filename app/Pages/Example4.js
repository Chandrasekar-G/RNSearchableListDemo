import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Switch,
  ScrollView
} from "react-native";
import { SearchableSectionList } from "react-native-searchable-list";
import Header from "../Components/Header";

class Example4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "Asia",
          data: ["Taj Mahal", "Great Wall of China", "Petra"]
        },
        {
          title: "South America",
          data: ["Machu Picchu", "Christ the Redeemer", "Chichen Itza"]
        },
        {
          title: "Europe",
          data: ["Roman Colosseum"]
        }
      ],
      searchTerm: "",
      searchAttribute: "",
      ignoreCase: true
    };
  }

  render() {
    const { data, searchTerm, searchAttribute, ignoreCase } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Header title={"Section List"} navigation={this.props.navigation} />
        <View style={styles.pageContainer}>
          <ScrollView>
            <View style={styles.searchInputs}>
              <TextInput
                style={styles.search}
                placeholder={
                  ignoreCase
                    ? "Search Wonder Country"
                    : "Search Wonder Country Case Sensitively"
                }
                onChangeText={searchTerm => this.setState({ searchTerm })}
              />
              <Switch
                style={styles.switch}
                value={ignoreCase}
                tintColor={"#D44744"}
                thumbTintColor={"#D44744"}
                onTintColor={"#f4cfce"}
                onValueChange={ignoreCase => {
                  this.setState({ ignoreCase });
                }}
              />
            </View>
            <SearchableSectionList
              style={styles.list}
              sections={data}
              searchTerm={searchTerm}
              ignoreCase={ignoreCase}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={{ fontWeight: "bold" }}>{title}</Text>
              )}
              renderItem={({ item }) => (
                <Text style={styles.listItem}>{item}</Text>
              )}
              keyExtractor={item => item}
            />
          </ScrollView>
          <View style={styles.info}>
            <View style={styles.row}>
              <Text style={styles.prop}>Prop</Text>
              <Text style={styles.val}>Val</Text>
            </View>
            <View style={styles.row1}>
              <Text style={styles.prop}>data</Text>
              <ScrollView style={{ height: 80 }}>
                <Text style={styles.val}>{JSON.stringify(data)}</Text>
              </ScrollView>
            </View>
            <View style={styles.row}>
              <Text style={styles.prop}>searchTerm</Text>
              <Text style={styles.val}>{searchTerm.toString()}</Text>
            </View>
            <View style={styles.row1}>
              <Text style={styles.prop}>searchAttribute</Text>
              <Text style={styles.val}>{searchAttribute}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.prop}>ignoreCase</Text>
              <Text style={styles.val}>{ignoreCase.toString()}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Example4;

const styles = StyleSheet.create({
  pageContainer: {
    padding: 10,
    flex: 1
  },
  searchInputs: {
    flexDirection: "row"
  },
  search: {
    flex: 8,
    marginBottom: 20,
    borderColor: "#D44744",
    borderBottomWidth: 3,
    padding: 10
  },
  switch: {
    flex: 2
  },
  listItem: {
    padding: 10,
    borderColor: "#f4cfce",
    borderWidth: 1,
    borderRadius: 10,
    margin: 2
  },
  info: {
    padding: 10,
    marginTop: 20,
    borderColor: "#f4cfce",
    borderWidth: 1
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#f4cfce"
  },
  row1: {
    flexDirection: "row"
  },
  prop: {
    flex: 1,
    padding: 10
  },
  val: {
    borderLeftWidth: 1,
    alignSelf: "center",
    flex: 2
  }
});
