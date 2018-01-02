import React from 'react';

export default class Todo extends React.Component{
    
    render(){
        const deadLineDate = this.props.deadLineDate;
        return(
            <div className="todo"
                 style={ Date.parse(deadLineDate)<Date.now() && !this.props.finishDate
                        ? { backgroundColor: 'rgba(220,20,60,0.25)',  }
                        : null}>
                <li>
                    <span className="todo-btn-controls">
                        <span className="edit-todo"  onClick={this.props.onEdit} title="Edit"> &#9998; </span>
                        <span className="delete-todo"  onClick={this.props.onDelete} title="Delete"> × </span>
                    </span>
                    <input id="check" className="todo-check" type="checkbox"
                           onChange={this.props.onChecked}
                           name = {this.props.title}
                           checked = { this.props.checked }
                           title="Set as Complete?"/>
                    <span className="todo-title">{this.props.title}</span>
                    <p className="todo-description" style={this.props.checked? {color:'grey'} : null}>
                        { this.props.description }</p>

                    <div className="todo-date">
                        <span className="todo-deadLine-date" style={ Date.parse(deadLineDate)<Date.now() && !this.props.finishDate
                            ? { color: 'red' }
                            : { color: 'crimson' }} > Deadline: { deadLineDate } </span>
                        <span className="todo-finish-date" style={ this.props.checked == 'checked' ? { color: 'black' } : { color: 'gray' } }> Task Completed: { this.props.finishDate } </span>
                    </div>
                </li>
            </div>
        );
    }
}