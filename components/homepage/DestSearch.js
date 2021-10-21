import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  TouchableOpacity,
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
          distance: 364.2,
          rating: 0.52,
          color: {
            r: 255,
            g: 255,
            b: 50
          }
        },
        {
          title: "School Route",
          origin: "170 Centre Street",
          destination: "71 Columbine Road",
          distance: 3.2,
          rating: 0.52,
          color: {
            r: 40,
            g: 255,
            b: 50
          }
        },
        {
          title: "Work Route",
          origin: "71 Columbine Road",
          destination: "1 First Ave",
          distance: 3.2,
          rating: 0.52,
          color: {
            r: 40,
            g: 255,
            b: 50
          }
        },
      ],
      searchSuggestions: [
        "71 Columbine Road",
        "71 Columbine Road",
        "71 Columbine Road",
        "71 Columbine Road",
        "71 Columbine Road",        
      ],
      containerStyle: {
        position: "relative",
        bottom: 110,
        width: "100%",
        height: 650,
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        zIndex: 4
      }
    };
  }

  destFocus(){
    this.setState({
      containerStyle: {
        position: "absolute",
        bottom: -40,
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        zIndex: 4
      }
    })
  }

  destFocusChange(){
    if(this.state.containerStyle.position == "relative"){
      this.setState({
        containerStyle: {
          position: "absolute",
          bottom: -40,
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          zIndex: 4
        }
      })
    } else {
      this.refs.destInput.blur()
      this.setState({
        containerStyle: {
          position: "relative",
          bottom: 110,
          width: "100%",
          backgroundColor: "white",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          zIndex: 4
        }
      })
    }    
  }

  render() {

    let recentDests = [];
    for(let i=0; i<this.state.recentDests.length; i++){
      if(i==0){
        recentDests.push(
          <RecentDest text={this.state.recentDests[i]} marginLeft={0} key={i}/>
        );
      } else {
        recentDests.push(
          <RecentDest text={this.state.recentDests[i]} marginLeft={10} key={i}/>
        );
      }
    }

    let favoriteRoutes = [];
    for(let i=0; i<this.state.favoriteRoutes.length; i++){
      favoriteRoutes.push(
        <FavoriteRoute route={this.state.favoriteRoutes[i]} key={i}/>
      );
    }

    return (
      <View style={this.state.containerStyle}>
        <View style={styles.search}>
          <View horizontal={true} style={{flexDirection: "row"}}>
            <TextInput style={styles.searchBar} 
              placeholder={"Where do you want to go?"}
              onFocus={() => {this.destFocus()}}
              ref="destInput"/>
            <TouchableOpacity activeOpacity={0.6} style={{paddingRight: 10, borderRadius: 5}}
              onPress={() => this.destFocusChange()}>
              <Image style={{zIndex: 5, height: 40, width: 40, position: "relative", top: 11, left: 4}} 
                source={require('../../media/homepage/whiteArrow.png')}/>
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              horizontal={true}
              style={styles.scrollingDestWrapper}
            >
            {recentDests}
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
          <ScrollView style={styles.favoriteRouteContainer}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={false}
          >
            {favoriteRoutes}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const RecentDest = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={[recent.recentDestWrapper, { marginLeft: props.marginLeft}]}>
      <View style={recent.recentDest}>
        <Text numberOfLines={1} selectable={true} style={recent.title}>
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const FavoriteRoute = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={[styles.favoriteRouteWrapper]}>
      <View style={{flexDirection: "row"}}>
        <View style={{flex: 5}}>
          <Text style={styles.favoriteRouteTitle}>{props.route.title}</Text>
          <View style={{flexDirection: "row"}}>
            <Text style={{fontWeight: "bold"}}>From </Text>
            <Text style={styles.favoriteRouteOrigin}>{props.route.origin}</Text>
          </View>
          <View style={{flexDirection: "row"}}>
            <Text style={{fontWeight: "bold"}}>To </Text>
            <Text style={styles.favoriteRouteOrigin}>To {props.route.destination}</Text>
          </View>

        </View>
        <View style={{flex: 2}}>
          <Text style={{fontSize: 16, fontWeight: "bold", color: "gray"}}>{props.route.distance} miles</Text>
          <Text style={{fontSize: 30, fontWeight: "bold", color: `rgb(${props.route.color.r*0.75}, ${props.route.color.g*0.75}, ${props.route.color.b*0.75})`}}>{props.route.rating*100}%</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const searchResults = (props) => {

}

const styles = StyleSheet.create({
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
    width: "80%",
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

  historyWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  favoriteRouteWrapper: {
    width: "100%",
    backgroundColor: "rgb(245, 245, 245)",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20
  },

  favoriteRouteTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  favoriteRouteContainer: {
    width: "90%",
    height: "72%",
    padding: 0,
    backgroundColor: "tomato"
  }
});

const recent = StyleSheet.create({
  recentDestWrapper: {
    borderRadius: 5
  },

  recentDest: {
    padding: 6,
    backgroundColor: "white",
    borderRadius: 10,
  },

  title: {
    maxWidth: 150,
    fontSize: 15
  }
});

export default DestSearch;
