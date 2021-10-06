import React from "react";
import {StyleSheet, View, Text } from "react-native";

class Map extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.map}>
          <Text>THIS WILL BE A MAP</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%"
  },

  map: {
    height: "100%",
    width: "100%",
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Map;
