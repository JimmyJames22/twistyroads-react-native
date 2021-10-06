import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Map from "./components/homepage/Map";
import DestSearch from "./components/homepage/DestSearch";
import MenuManager from "./components/homepage/MenuManager";


export default function App() {
  return (
    <View style={styles.container}>
      <Map style={styles.map} />
      <DestSearch style={styles.search} />
      <MenuManager menuOpacity={0}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },

  map: {
    // zIndex: -1,
  },

  search: {
    height: 65,
    zIndex: 3
  },

  menu: {
    
  }
});
