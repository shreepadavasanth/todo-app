/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

const InputComponent = (props) => {
  const {
    name,
    placeholder,
    Error,
    onChangeText,
    value,
    secureTextEntry,
    keyboardType,
    editable,
  } = props;

  return (
    <View>
      <Text style={styles.itemLabel}>{name}</Text>
      <View style={styles.itemHolder}>

        <TextInput
        multiline
          style={[styles.itemInput,{ height:props.textArea &&  150}]}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#D3D3D3"
          value={value}
          editable={editable}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />
      </View>
      {Error ? <Text style={styles.errorLabel}>{Error}</Text> : null}
    </View>
  );
};

export default InputComponent;
const styles = StyleSheet.create({
  itemLabel: {
    color: '#505F79',
    paddingLeft: 2,
    paddingBottom: 10,
    paddingTop: 25,
    fontSize: 16,
  },
  itemHolder: {
    borderColor: '#B7DEEB',
    backgroundColor: '#EEF6F9',
    borderWidth: 1,
    color: '#505F79',
    borderRadius: 7,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 0,
  },
  itemInput: {
    color: '#505F79',
    fontSize: 15,
    width: '100%',
  },
  itemInputIcon: {
    fontSize: 20,
    color: '#3378B1',
  },
  errorLabel: {
    color: '#ff0000',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
  },
});
