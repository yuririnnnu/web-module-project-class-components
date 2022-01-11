// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
    render(){
        console.log('TodoList',this.props)
        return (
            <div className="todoList">
                {
                    this.props.tasks.map(task => {
                        return <Todo handleToggleTask={this.props.handleToggleTask} key={task.id} task={task} />
                    })
                }
            </div>    
        )

    }
}