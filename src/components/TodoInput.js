import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Alert
} from "react-native";

export default class TodoInput extends Component {
  onPressAddTodo() {
    Alert.alert("AddTodo Button was Pushed");
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput}/>
        {/* <TouchableOpacity> */}
          <Text onPress={this.onPressAddTodo} style={styles.button}> Add</Text>
        {/* </TouchableOpacity> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    margin: 32,
    height: 100
  },
  textInput: {
    flex: 4,
    backgroundColor: 'red',
    marginRight: 8
  },
  button: {
    flex: 1,
    backgroundColor: 'green'
  }
});
