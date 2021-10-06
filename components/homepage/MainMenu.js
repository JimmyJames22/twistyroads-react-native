import React from "react";
import { StyleSheet, View, ImageButton, Text, TouchableOpacity } from "react-native";

class MainMenu extends React.Component {

  constructor() {
    super()
    this.state = {
      menuOptions: [
        "Settings",
        "Profile",
        "History"
      ]
    }
  }
  render() {
    return (
      <View style={[styles.container, {opacity: this.props.menuOpacity}]}>
        <MenuOption text={this.state.menuOptions[0]}/>
        <MenuOption text={this.state.menuOptions[1]}/>
        <MenuOption text={this.state.menuOptions[2]}/>
      </View>
    );
  }
}

const MenuOption = (props) => {
  return (
    <TouchableOpacity style={styles.itemWrapper}>
      <Text style={styles.item}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    bottom: 20,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: '#FFF',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    width: 70,
    zIndex: 1,
  },

  itemWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    borderRadius: 10,
    height: 30,
    paddingTop: 5,
    paddingBottom: 5,
  },

  item: {
    fontSize: 15,
    color: 'gray'
  }
});

export default MainMenu;
