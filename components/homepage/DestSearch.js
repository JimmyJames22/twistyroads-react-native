import React from "react";
import { StyleSheet, Text, TextInput, View, FlatList } from "react-native";

class DestSearch extends React.Component {
  constructor () {
    super()
    this.state = {
      recentDests: [
        "Home",
        "Work",
        "170 Centre Street",
        "100 High Street",
        "71 Columbine Road"
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.search}>
          <TextInput style={styles.searchBar}/>
          <FlatList horizontal={true} style={{height: 40}}>
            <Recent text={this.state.recentDests[0]}/>
            <Recent text={this.state.recentDests[1]}/>
            <Recent text={this.state.recentDests[2]}/>
            <Recent text={this.state.recentDests[3]}/>
            <Recent text={this.state.recentDests[4]}/>
          </FlatList>
        </View>
      </View>
    );
  }
}

const Recent = (props) => {
  return (
    <View style={styles.recentDestWrapper}>
      <Text>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    bottom: 650,
    width: "100%",
    height: 650,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  search: {
    backgroundColor: "dodgerblue",
    borderRadius: 20,
    paddingBottom: 10
  },

  searchBar: {
    margin: "2.5%",
    width: "95%",
    height: 45,
    backgroundColor: "rgba(255, 255, 255, .7)",
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 20,
  },

  recentDestWrapper: {
    fontSize: 20,
    height: 20,
    paddingLeft: 15
  }
});

export default DestSearch;
