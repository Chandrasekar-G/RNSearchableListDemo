import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Switch,
  ScrollView
} from "react-native";
import { SearchableFlatList } from "react-native-searchable-list";
import Header from "../Components/Header";

class Example1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        "Taj Mahal",
        "Great Wall of China",
        "Machu Picchu",
        "Christ the Redeemer",
        "Chichen Itza",
        "Roman Colosseum",
        "Petra",
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
        <Header title={"Flat List"} navigation={this.props.navigation} />
        <View style={styles.pageContainer}>
          <ScrollView>
            <View style={styles.searchInputs}>
              <TextInput
                style={styles.search}
                placeholder={
                  ignoreCase
                    ? "Search Wonders"
                    : "Search Wonders Case Sensitively"
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
            <SearchableFlatList
              style={styles.list}
              data={data}
              searchTerm={searchTerm}
              ignoreCase={ignoreCase}
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
              <ScrollView style={styles.val}><Text>{JSON.stringify(data)}</Text></ScrollView>
            </View>
            <View style={styles.row}>
              <Text style={styles.prop}>searchTerm</Text>
              <Text style={styles.val}>{searchTerm.toString()}</Text>
            </View>
            <View style={styles.row1}>
              <Text style={styles.prop}>searchAttribute</Text>
              <Text style={styles.val}>-</Text>
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

export default Example1;

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
    borderWidth: 1,
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
    alignSelf: "center",
    flex: 1
  }
});
