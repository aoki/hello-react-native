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

import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';

export default class TodoInput extends Component {
  onPressAddTodo() {
    Alert.alert("AddTodo Button was Pushed");
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput}/>
        <ButtonComponent
          onPress={this.onPressAddTodo}
          style={styles.button}
          text="Add"
          height={32}
        ></ButtonComponent>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    margin: 32,
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
