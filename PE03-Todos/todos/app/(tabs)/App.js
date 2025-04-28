import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from 'react-native';
import Input from './Input';
import Heading from './Heading';
import SubmitButton from './Button';

class App extends Component {
    constructor(){
        super();
        this.state = {
            inputValue: '',
            todos: [],
            type: 'All',
        }
    }

    inputChange(inputValue){
        console.log(' Input Value: ', inputValue);
        this.setState({inputValue});
    }

    addTodo(){
        const { inputValue, todos } = this.state;
        if (inputValue.trim()) {
            const todoList = {
                title: inputValue,
                todoIndex: todos.length + 1, 
                complete: false, 
            };
            this.setState(
                {
                    todos: [...todos, todoList],
                    inputValue: '',
                },
                () => {
                    console.log('State: ', this.state);
                }
            );
        }
    }


    render() {
        const {inputValue} = this.state;
        return(
            <View style={styles.container}>
                <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
                    <Heading />
                    <Input 
                        inputValue={inputValue}
                        inputChange={text => this.inputChange(text)}
                    />
                    <SubmitButton 
                        onPress={() => this.addTodo()}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1,
        paddingTop: 60,
    },
})

export default App;