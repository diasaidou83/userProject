import React, { Component } from "react"

import { StyleSheet, Text, View } from "react-native"
/* edited by JOO */

class User extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>
          Name: {this.props.name}
        </Text>
        <Text style={styles.bigText}>
          Company: {this.props.company}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { height: 130 },
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#FFFFFF"
  },
});

export default User
