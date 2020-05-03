import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

export default function TodoItem({item}) {
  return (
    <View >
      <TouchableOpacity>
         <Text style={styles.item}>{item.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    item:{
        padding:20,
        marginTop:16,
        borderColor: '#bbb',
        borderWidth:1,
        borderStyle:"dashed",
        borderRadius:10,


    }

});