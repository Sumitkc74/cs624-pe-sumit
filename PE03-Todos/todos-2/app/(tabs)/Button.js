import React from 'react';
import {TouchableOpacity, Text, StyleSheet } from 'react-native';

const SubmitButton = ({ onPress }) => (
    <TouchableOpacity 
        style={styles.buttonContainer} 
        onPress={() => {
            onPress(); // Calling the function for the button
        }}
    >
        <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
);

const styles=StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#ffffff',
        marginTop: 20,
        marginRight: 20,
        shadowOpacity: 0.1,
        width: '40%',
        height: 50,
        alignSelf: 'flex-end',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#3e3e40',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default SubmitButton;