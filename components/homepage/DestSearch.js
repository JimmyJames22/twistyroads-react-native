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
      favoriteRoutes: [
        {
          title: "Rec Route",
          origin: "71 Columbine Road",
          destination: "5 Eager Road",
          distance: 3.2,
          rating: 0.52,
        },
        {
          title: "School Route",
          origin: "170 Centre Street",
          destination: "71 Columbine Road",
          distance: 3.2,
          rating: 0.52,
        },
        {
          title: "Work Route",
          origin: "71 Columbine Road",
          destination: "1 First Ave",
          distance: 3.2,
          rating: 0.52,
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.search}>
          <TextInput style={styles.searchBar} />
          <View style={{ width: "100%", alignItems: "center" }}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              horizontal={true}
              style={styles.scrollingDestWrapper}
            >
              <Recent text={this.state.recentDests[0]} marginLeft={0} />
              <Recent text={this.state.recentDests[1]} marginLeft={10} />
              <Recent text={this.state.recentDests[2]} marginLeft={10} />
              <Recent text={this.state.recentDests[3]} marginLeft={10} />
              <Recent text={this.state.recentDests[4]} marginLeft={10} />
            </ScrollView>
          </View>
        </View>
        <View style={styles.historyWrapper}>
          <Text
            style={{
              padding: 15,
              paddingLeft: 25,
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
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
    <View style={[styles.recentDestWrapper, { marginLeft: props.marginLeft }]}>
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
      <Text style={styles.prevRouteTitle}>Route Title</Text>
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
    paddingRight: 0,
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
    width: "95%",
    marginTop: 5,
    borderRadius: 5,
  },

  recentDestWrapper: {
    fontSize: 20,
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
    backgroundColor: "rgb(245, 245, 245)",
    borderRadius: 10,
    padding: 10,
  },

  prevRouteTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default DestSearch;
