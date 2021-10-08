import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  ScrollView,
} from "react-native";

class DestSearch extends React.Component {
  constructor() {
    console.log("jemez is dum");
    super();
    this.state = {
      recentDests: [
        "Home",
        "Work",
        "170 Centre Street Milton, MA",
        "100 High Street",
        "71 Columbine Road",
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.search}>
          <TextInput style={styles.searchBar} />
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={true}
            style={styles.scrollingDestWrapper}
          >
            <Recent text={this.state.recentDests[0]} />
            <Recent text={this.state.recentDests[1]} />
            <Recent text={this.state.recentDests[2]} />
            <Recent text={this.state.recentDests[3]} />
            <Recent text={this.state.recentDests[4]} />
          </ScrollView>
        </View>
        <View style={styles.historyWrapper}>
          <Text style={{ padding: 15, paddingLeft: 25, fontSize: 24 }}>
            Favorite Routes
          </Text>
          <PreviousRoute />
        </View>
      </View>
    );
  }
}

const Recent = (props) => {
  return (
    <View style={styles.recentDestWrapper}>
      <TouchableHighlight style={styles.recentDest}>
        <Text numberOfLines={1} selectable={true} style={{ maxWidth: 150 }}>
          {props.text}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const PreviousRoute = (props) => {
  return (
    <TouchableHighlight style={styles.previousRouteWrapper}>
      <View>
        <Text>Route</Text>
      </View>
    </TouchableHighlight>
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingBottom: 15,
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

  scrollingDestWrapper: {
    paddingTop: 5,
  },

  recentDestWrapper: {
    fontSize: 20,
    paddingLeft: 15,
  },

  recentDest: {
    padding: 6,
    backgroundColor: "white",
    borderRadius: 10,
  },

  historyWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  previousRouteWrapper: {
    width: "90%",
    backgroundColor: "rgb(225, 225, 225)",
    borderRadius: 10,
  },
});

export default DestSearch;
