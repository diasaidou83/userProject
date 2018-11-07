import React, { Component } from "react";

import { StyleSheet, Text, View, TextInput, ImageBackground, Dimensions } from "react-native";

import User from "./User";
import GetUser from "./get_user";

class UserProject extends Component {
  constructor(props) {
    super(props);
    this.state = { userId: '', user: null };
  }

  _handleTextChange = event => {
    let userId = event.nativeEvent.text;
    GetUser.fetchUser(userId).then(user => {
      this.setState({ user: user });
    });
  };

  render() {
    let content = null;

    if (this.state.user !== null) {
      content = (
        <User
          name={this.state.user.name}
          company={this.state.user.company}
        />
      );
    }

    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./flowers.png")}
          resizeMode= 'cover' 
          style={styles.backdrop}
        >
          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={styles.mainText}>
                User Id: 
              </Text>
              <View style={styles.idContainer}>
                <TextInput
                  textAlign={'center'}
                  style={[styles.userId, styles.mainText]}
                  onSubmitEditing={this._handleTextChange}
                  underlineColorAndroid="transparent"
                />
              </View>
            </View>
            {content}
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const baseFontSize = 16

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingTop: 30 },
  backdrop: { 
    flex: 1, 
    flexDirection: "column",
    width: Dimensions.get('window').width, 
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: "#000000",
    opacity: 0.5,
    flexDirection: "column",
    alignItems: "center"
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    padding: 30
  },
  idContainer: {
    height: baseFontSize + 10,
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },
  userId: { flex: 1, flexBasis: 1, width: 50, height: baseFontSize},
  mainText: { fontSize: baseFontSize, color: "#FFFFFF" }
});

export default UserProject;
