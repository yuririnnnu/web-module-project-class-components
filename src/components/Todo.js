import React from 'react';

export default class Todo extends React.Component {
    handleClick = () => {
        this.props.handleToggleTodo(this.props.todo)
    }
    render() {
        console.log("This is the todo",this.props.todo);
        return (
            <div onClick={this.handleClick} className={`todo${this.props.todo.done ? ' done': ''}`}>
                <p>{this.props.todo.name}</p>
            </div>
        )
    }
}