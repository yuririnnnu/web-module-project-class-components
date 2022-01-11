import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './components/Todo.css';

const tasks = [
  {
    task: 'Finish this assignment',
    id: 1,
    completed: false  
  },
  {
    task: 'Finish this assignment',
    id: 2,
    completed: false  
  }
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks:tasks
    };
  }

  handleAddTask = (taskName) => {
    const newTask = {
      task:taskName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newTask]
    })
  }
  handleToggleTask = (selectedTask) => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.map(task => {
        if(task.id === selectedTask.id) {
          return({
            ...task,
            completed: !task.completed
          })
        } else {
          return task
        } 
      })
    })
  }
  handleClearTask = () => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter(task => {
        return !task.completed
      })
    })
  }
  render() {
    console.log(this.state.tasks)
    return (
      <div>        
        <h1>Tasks!</h1>
        <TodoForm handleAddTask={this.handleAddTask} />
        <TodoList handleToggleTask={this.handleToggleTask} tasks={this.state.tasks} />
        <button onClick={this.handleClearTask}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
