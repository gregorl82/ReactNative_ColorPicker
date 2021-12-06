import React, { useReducer } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  const initialState = {
    red: '00',
    green: '00',
    blue: '00',
    color: '#000000',
  };

  const setColorReducer = (state, action) => {
    switch (action.type) {
      case 'setRed':
        return { ...state, red: action.payload };
      case 'setGreen':
        return { ...state, green: action.payload };
      case 'setBlue':
        return { ...state, blue: action.payload };
      case 'setColor':
        return { ...state, color: action.payload };
      case 'resetColors':
        return initialState;
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(setColorReducer, initialState);

  // add input validation
  const handleRedChange = (text) => {
    dispatch({ type: 'setRed', payload: text });
  };
  const handleBlueChange = (text) => {
    dispatch({ type: 'setBlue', payload: text });
  };
  const handleGreenChange = (text) => {
    dispatch({ type: 'setGreen', payload: text });
  };

  handleDisplay = () => {
    const color = '#' + state.red + state.green + state.blue;
    dispatch({ type: 'setColor', payload: color });
  };

  handleReset = () => {
    dispatch({ type: 'resetColors' });
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
            backgroundColor: state.color,
            height: 200,
            width: 300,
            borderColor: 'black',
            borderWidth: 1,
            alignSelf: 'center',
          }}
        ></View>
        <Text>Hex code: {state.color}</Text>
      </View>

      <View>
        <View style={styles.inputsContainer}>
          <View style={styles.inputs}>
            <Text>Red:</Text>
            <TextInput value={state.red} onChangeText={handleRedChange} />
          </View>
          <View style={styles.inputs}>
            <Text>Green:</Text>
            <TextInput value={state.green} onChangeText={handleGreenChange} />
          </View>
          <View style={styles.inputs}>
            <Text>Blue:</Text>
            <TextInput value={state.blue} onChangeText={handleBlueChange} />
          </View>
        </View>

        <Button title={'Display'} onPress={handleDisplay} />
        <Button title={'Reset'} onPress={handleReset} />
      </View>
    </KeyboardAvoidingView>
  );
}

// Update styling
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 16,
  },
  inputsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputs: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
