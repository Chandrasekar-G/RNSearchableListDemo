import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Switch } from "react-native";
import Header from "../Components/Header";
import { SearchableFlatList } from "react-native-searchable-list";

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
        "Petra"
      ],
      searchTerm: "",
      ignoreCase: true
    };
  }

  render() {
    const { data, searchTerm, ignoreCase } = this.state;
    return (
      <View>
        <Header title={"Flat List"} navigation={this.props.navigation} />
        <View style={styles.pageContainer}>
          <View style={styles.searchInputs}>
            <TextInput
              style={styles.search}
              placeholder={ignoreCase ? "Search for Wonders" : "Search for Wonders Case Sensitively" }
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
        </View>
      </View>
    );
  }
}

export default Example1;

const styles = StyleSheet.create({
  pageContainer: {
    padding: 10
  },
  searchInputs: {
    flexDirection: 'row',
  },
  search: {
    flex: 8,
    marginBottom: 20,
    borderColor: "#D44744",
    borderBottomWidth: 3,
    padding: 10
  },
  switch: {
    flex:2,
  },
  listItem: {
    padding: 10,
    borderColor: "#f4cfce",
    borderWidth: 1,
    borderRadius: 10,
    margin: 2
  }
});
