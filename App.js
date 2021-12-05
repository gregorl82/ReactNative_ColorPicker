import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  // convert to useReducer
  const [red, setRed] = useState('00');
  const [blue, setBlue] = useState('00');
  const [green, setGreen] = useState('00');
  const [color, setColor] = useState('#000000');

  // add validation to prevent non hex input
  const handleRedChange = (text) => {
    setRed(text);
  };
  const handleBlueChange = (text) => {
    setBlue(text);
  };
  const handleGreenChange = (text) => {
    setGreen(text);
  };

  handleDisplay = () => {
    const color = '#' + red + blue + green;
    setColor(color);
  };

  handleReset = () => {
    setRed('00');
    setBlue('00');
    setGreen('00');
    setColor('#000000');
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Text>Color Picker</Text>
        <Text>Enter hex values for red, blue and green then press Display</Text>
      </View>

      <View>
        <View
          style={{
            backgroundColor: color,
            height: 200,
            width: 300,
            borderColor: 'black',
            borderWidth: 1,
          }}
        ></View>
        <Text>Hex code: {color}</Text>
      </View>

      <View>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <View>
            <Text>Red:</Text>
            <TextInput value={red} onChangeText={handleRedChange} />
          </View>
          <View>
            <Text>Blue:</Text>
            <TextInput value={blue} onChangeText={handleBlueChange} />
          </View>
          <View>
            <Text>Green:</Text>
            <TextInput value={green} onChangeText={handleGreenChange} />
          </View>
        </View>

        <Button title={'Display'} onPress={handleDisplay} />
        <Button title={'Reset'} onPress={handleReset} />
      </View>

      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

// Update styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
