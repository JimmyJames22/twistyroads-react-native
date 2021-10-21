import React from "react";
import { StyleSheet, View, ImageButton, Text, TouchableHighlight } from "react-native";

class MenuBubble extends React.Component {
  constructor(){
    super()
  }
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress} style={{zIndex: 2, borderRadius: 15}}>
        <View style={styles.container}>
          <Text style={styles.menuResting}>M</Text>
        </View>
      </TouchableHighlight>
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
