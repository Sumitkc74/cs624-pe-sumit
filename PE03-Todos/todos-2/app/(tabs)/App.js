// import React, { Component } from 'react'
// import { View, ScrollView, StyleSheet } from 'react-native'
// import Input from './Input'
// import Heading from './Heading'
// import SubmitButton from './Button'
// import TodoList from './TodoList'
// import TabBar from './TabBar'

// let todoIndex = 0

// class App extends Component {
//     constructor(){
//         super();
//         this.state = {
//             inputValue: '',
//             todos: [],
//             type: 'All',
//         }
//         // this.SubmitButton = this.SubmitButton.bind(this)
//         this.toggleComplete = this.toggleComplete.bind(this)
//         this.deleteTodo = this.deleteTodo.bind(this)
//         this.setType = this.setType.bind(this)
//     }

//     deleteTodo (todoIndex) {
//         let { todos } = this.state
//         todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
//         this.setState({ todos }) 
//     }

//     toggleComplete (todoIndex) {
//         let { todos } = this.state
//         todos.forEach((todo) => {
//             if(todo.todoIndex === todoIndex) {
//                 todo.complete = !todo.complete
//             }
//         })
//         this.setState({ todos })
//     }

//     setType(type) {
//         this.setState({ type })
//     }

//     inputChange(inputValue){
//         console.log(' Input Value: ', inputValue);
//         this.setState({inputValue});
//     }

//     addTodo(){
//         const { inputValue, todos } = this.state;
//         if (inputValue.trim()) {
//             const todoList = {
//                 title: inputValue,
//                 todoIndex: todos.length + 1, 
//                 complete: false, 
//             };
//             this.setState(
//                 {
//                     todos: [...todos, todoList],
//                     inputValue: '',
//                 },
//                 () => {
//                     console.log('State: ', this.state);
//                 }
//             );
//         }
//     }


//     render() {
//         const {inputValue, todos, type} = this.state;
//         return(
//             <View style={styles.container}> 
//                 <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
//                     <Heading />
//                     <Input inputValue={inputValue} inputChange={text => this.inputChange(text)} />
//                     <TodoList 
//                         toggleComplete={this.toggleComplete}
//                         deleteTodo = {this.deleteTodo}
//                         todos={todos}
//                         type={type}
//                     />
//                     <SubmitButton onPress={() => this.addTodo()} />
//                 </ScrollView>
//                 <TabBar type={type} setType={this.setType} />
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f5f5f5',
//     },
//     content: {
//         flex: 1,
//         paddingTop: 60,
//     },
// })

// export default App;


import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

import Input from './Input'
import Heading from './Heading'
import SubmitButton from './Button'
import TodoList from './TodoList'
import TabBar from './TabBar'

let todoIndex = 0

class App extends Component {
  constructor(){
        super();
        this.state = {
            inputValue: '',
            todos: [],
            type: 'All',
        }
        this.toggleComplete = this.toggleComplete.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.setType = this.setType.bind(this)
    }

  componentDidMount() {
    this.fetchTodos();
  }
  
  fetchTodos = async () => {
    try {
      const response = await fetch('https://cityutodoapi.azurewebsites.net/todos');
      const todos = await response.json();
      this.setState({ todos });
    } catch (error) {
      console.error(error);
    }
  };

  submitTodo () {
    if (this.state.inputValue.match(/^\s*$/)) { 
      return
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex, 
      complete: false
    }
    todoIndex++ 
    
    const todos = [...this.state.todos, todo]
    this.setState({ todos, inputValue: '' }, () => {
      console.log('State: ', this.state)
    }) 
  }

  deleteTodo (todoIndex) {
    let { todos } = this.state
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
    this.setState({ todos })
  }
  
  toggleComplete (todoIndex) {
    let todos = this.state.todos
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete
      }
    })
    this.setState({ todos })
  }
  
  setType (type) {
    this.setState({ type })
  }
  
  inputChange(inputValue) {
    console.log(' Input Value: ' , inputValue)
    this.setState({ inputValue })
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
    const { todos, inputValue, type } = this.state
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
          <Heading />
          <Input inputValue={inputValue} inputChange={(text) => this.inputChange(text)} />
          <TodoList
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            todos={todos} 
            type={type} />
          <SubmitButton  onPress={() => this.addTodo()} />
        </ScrollView>
        <TabBar type={type} setType={this.setType} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
})

export default App