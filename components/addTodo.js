import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';


export default function AddTodo({submitHandler}) {

const [text, setText] = useState('');

changeHandler = (val) => {

setText(val);

}

  return (
    <View style={styles.header}>
      <TextInput placeholder='new goal' style={styles.input} onChangeText={changeHandler}/>
      <Button onPress={ () => submitHandler(text)} title='add' color='coral'/>
    </View>

  );
}

const styles = StyleSheet.create({
  input: {

    marginBottom:10,
    paddingVertical:6,
    paddingHorizontal:7,
    borderBottomColor: '#ddd'  },
    borderBottomWidth:1,
 
});