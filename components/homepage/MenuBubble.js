import React from "react";
import { StyleSheet, View, ImageButton, Text, TouchableOpacity } from "react-native";

class MenuBubble extends React.Component {
  constructor(){
    super()
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Text style={styles.menuResting}>M</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "dodgerblue",
    height: 70,
    width: 70,
    borderRadius: 15,
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },

  menuResting: {
    color: "white",
    fontSize: 20,
  }
});

export default MenuBubble;
