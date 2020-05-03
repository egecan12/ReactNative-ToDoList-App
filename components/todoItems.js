import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

export default function TodoItem({item, pressHandler}) {
  return (
    <View >
      <TouchableOpacity >
         <Text style={styles.item} onPress={() => pressHandler(item.key)}>{item.text}</Text>
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