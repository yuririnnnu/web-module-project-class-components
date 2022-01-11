import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const todos = [
  {
    name: 'Finish this assignment',
    id: 1,
    done: false  
  },
  {
    name: 'Finish this assignment',
    id: 2,
    done: false  
  }
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos:todos
    };
  }

  handleAddTodo = (todoName) => {
    const newTodo = {
      name:todoName,
      id: Date.now(),
      done: false
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }
  handleToggleTodo = (selectedTodo) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if(this.id === selectedTodo.id) {
          return({
            ...todo,
            done: !todo.done
          })
        } else {
          return todo
        } 
      })
    })
  }
  handleClearTodo = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo=>{
        return !todo.done
      })
    })
  }
  render() {
    return (
      <div>        
        <h1>Todos!</h1>
        <TodoForm handleAddTodo={this.handleAddTodo} />
        <TodoList handleToggleTodo={this.handleToggleTodo} todos={this.state.todos} />
        <button onClick={this.handleClearTodo}>Done</button>
      </div>
    );
  }
}

export default App;
