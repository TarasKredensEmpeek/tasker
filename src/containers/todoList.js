import React from 'react';

import Todo from './todo';

export default class TodoList extends React.Component{

    render(){
        const onTodoDelete = this.props.onTodoDelete;
        const onTodoEdit = this.props.onTodoEdit;
        const onCheckedValue = this.props.onCheckedValue;
        return(
            <div className="todo-list">
                <ul>
                    {
                        this.props.todos.map(function(todo, idx){
                            return (
                                <Todo
                                    key = { idx }
                                    title = { todo.title }
                                    description = { todo.description }
                                    deadLineDate = { todo.deadLineDate }
                                    checked = { todo.checked }
                                    finishDate = { todo.finishDate }
                                    onDelete = { onTodoDelete.bind(null, todo) }
                                    onChecked = { onCheckedValue.bind(null, todo) }
                                    onEdit = { onTodoEdit.bind(null, todo) }
                                >
                                    {todo.description}
                                </Todo>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}