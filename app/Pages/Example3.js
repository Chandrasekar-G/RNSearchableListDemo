import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Switch } from "react-native";
import Header from "../Components/Header";
import { SearchableFlatList } from "react-native-searchable-list";

class Example3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Taj Mahal",
          address: {
            continent: "Asia",
            country: "India"
          }
        },
        {
          id: 2,
          name: "Great Wall of China",
          address: {
            continent: "Asia",
            country: "China"
          }
        },
        {
          id: 3,
          name: "Machu Picchu",
          address: {
            continent: "South America",
            country: "Peru"
          }
        },
        {
          id: 4,
          name: "Christ the Redeemer",
          address: {
            continent: "South America",
            country: "Brazil"
          }
        },
        {
          id: 5,
          name: "Chichen Itza",
          address: {
            continent: "South America",
            country: "Mexico"
          }
        },
        {
          id: 6,
          name: "Roman Colosseum",
          address: {
            continent: "Europe",
            country: "Italy"
          }
        },
        {
          id: 7,
          name: "Petra",
          address: {
            continent: "Asia",
            country: "Jordan"
          }
        }
      ],
      searchTerm: "",
      searchAttribute: "address.continent",
      ignoreCase: true
    };
  }

  render() {
    const { data, searchTerm, searchAttribute, ignoreCase } = this.state;
    return (
      <View>
        <Header title={"Flat List"} navigation={this.props.navigation} />
        <View style={styles.pageContainer}>
          <View style={styles.searchInputs}>
            <TextInput
              style={styles.search}
              placeholder={
                ignoreCase
                  ? "Search for Wonder Continents"
                  : "Search for Wonder Continents Case Sensitively"
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
            searchAttribute={searchAttribute}
            renderItem={({ item }) => (
              <Text style={styles.listItem}>{item.name}</Text>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}

export default Example3;

const styles = StyleSheet.create({
  pageContainer: {
    padding: 10
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
  }
});
