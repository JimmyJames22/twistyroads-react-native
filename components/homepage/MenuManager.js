import React from "react";
import { StyleSheet, View, ImageButton, Text, TouchableHighlight } from "react-native";

import MenuBubble from './MenuBubble';
import MainMenu from './MainMenu';

class MenuManager extends React.Component {

  constructor() {
    super()
    this.state = {
      menuOpacity: 0
    }
  }

  toggleMenu = () => {
    if(this.state.menuOpacity > 0){
      this.setState({'menuOpacity': 0})
    } else {
      this.setState({'menuOpacity': 100})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MenuBubble onPress={this.toggleMenu}/>
        <MainMenu menuOpacity={this.state.menuOpacity}></MainMenu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    top: 60,
    right: 20
  },

  menuResting: {
    color: "white",
    fontSize: 20,
  }
});

export default MenuManager;
