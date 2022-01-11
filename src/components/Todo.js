import React from 'react';

export default class Todo extends React.Component {
    handleClick = () => {
        this.props.handleToggleTask(this.props.task)
    }
    render() {
        console.log("This is the tasks", this.props.task);
        return (
            <div onClick={this.handleClick} className={`task${this.props.task.completed ? ' completed': ''}`}>
                <p>{this.props.task.task}</p>
            </div>
        )
    }
}