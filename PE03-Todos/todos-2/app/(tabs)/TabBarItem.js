import React from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'

const TabBarItem = ({ border, title, selected, setType, type }) => (
    <TouchableHighlight
        underlayColor='#efefef'
        onPress={setType}
        style={[
            styles.item, selected ? styles.selected : null,
            border ? styles.border : null,
            type == title ? styles.selected : null ]}>
        <Text style={[ styles.itemText, type == title ? styles.bold : null ]}>
            { title }
        </Text>   
    </TouchableHighlight>
)

const styles = StyleSheet.create({
    item: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 5,
      backgroundColor: '#fff',
    },
    selected: {
      backgroundColor: '#dcdcdc',
    },
    border: {
      borderLeftWidth: 1,
      borderColor: '#ccc',
    },
    itemText: {
      fontSize: 16,
      color: '#333',
    },
    bold: {
      fontWeight: 'bold',
    },
  });

export default TabBarItem