import React from 'react';

import InputBox from './inputBox';
import TodoList from './todoList'

export default class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            todos: [],
            allTodos:[],
            editedTodoId: '',
            isTitleCorrect: true
        }
    }

    componentDidMount(){
        const localTodos = JSON.parse(localStorage.getItem('todos'));
        if(localTodos){
            this.setState({todos: localTodos, allTodos: localTodos})
        }
    }

    componentDidUpdate(){
        this._updateLocalStorage();
    }

    handleTodoAdd(newTodo){
        const newTodos = this.state.todos.slice();
        newTodos.unshift(newTodo);

        this.setState({ todos: newTodos, allTodos: newTodos});
        this._clearInputsHelper();

    }

    handleTodoDelete(todo){
        const todoId = todo.id;
        const newTodos = this.state.todos.filter(function(todo) {
            return todo.id !== todoId;
        });
        this.setState({ todos: newTodos, allTodos: newTodos });
    }

    handleTodoEdit(editedTodo){
        const title = document.getElementById('inputTitle');
        const description = document.getElementById('input');

        title.value = editedTodo.title;
        description.value = editedTodo.description;

        document.getElementById('fullDLD').value = editedTodo.deadLineDate;

        this._showEditControl();

       this.setState({
           editedTodoId: editedTodo.id,
           editedTitle: editedTodo.title,
           editedDescription: editedTodo.description
       });
    }

    handleTodoSave(title, description, deadLineDate, editedId){
        const todosArr = this.state.todos.slice();
        let newTodosArr = [];

        const currentTodo = this.state.todos.filter(function(todo) {
            return todo.id == editedId;
        });

        currentTodo[0].title = title;
        currentTodo[0].description = description;
        currentTodo[0].deadLineDate = deadLineDate;

        for (let i = 0; i < todosArr.length; i++){
            if(currentTodo.id != todosArr[i].id){
                newTodosArr.push(todosArr[i]);
            }
            else newTodosArr.push(currentTodo);
        }
        this.setState({
            todos: newTodosArr
        });

        this._clearInputsHelper();
    }

    handleCheckedValue(todo){
        const todoId = todo.id;
        const todosArr = this.state.todos.slice();

        let newTodosArr = [];
        const currentTodo = this.state.todos.filter(function(todo) {
            return todo.id == todoId;
        });

        if(!todo.isDone){
            const date = new Date();
            currentTodo[0].isDone = true;
            currentTodo[0].checked = 'checked';
            currentTodo[0].finishDate = date.toLocaleString();

            for (let i = 0; i < todosArr.length; i++){
                if(currentTodo.id != todosArr[i].id){
                    newTodosArr.push(todosArr[i]);
                }
                else newTodosArr.push(currentTodo);
            }
        }
        else {
            currentTodo[0].isDone = false;
            currentTodo[0].checked = '';
            currentTodo[0].finishDate = '';
            for (let i = 0; i < todosArr.length; i++){
                if(currentTodo.id != todosArr[i].id){
                    newTodosArr.push(todosArr[i]);
                }
                else newTodosArr.push(currentTodo);
            }
        }
        this.setState({
             todos: newTodosArr
        });
    }

    render(){
        return(
            <div className="todo-app">
                <h2 className="app-header">Task List</h2>

                <InputBox onTodoAdd={this.handleTodoAdd.bind(this)}
                          onTodoSave={this.handleTodoSave.bind(this)}
                          editedTodoId={ this.state.editedTodoId }
                          clearInuts={ this._clearInputsHelper.bind(this) }
                />

                <TodoList todos = { this.state.todos }
                          onTodoDelete = {this.handleTodoDelete.bind(this)}
                          onTodoEdit = {this.handleTodoEdit.bind(this)}
                          onCheckedValue = {this.handleCheckedValue.bind(this)}
                />
                <div className="nav">
                    <ul className="nav-list">
                        <li>
                            <a href="#" className="nav-elem" onClick={this.showAll.bind(this)}> All </a>
                        </li>
                        <li>
                            <a href="#" className="nav-elem" onClick={this.showNew.bind(this)}> New </a>
                        </li>
                        <li>
                            <a href="#" className="nav-elem" onClick={this.showOverdue.bind(this)}> Overdue </a>
                        </li>
                        <li >
                            <a href="#" className="nav-elem" onClick={this.showComplete.bind(this)}>Completed</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    showAll(){
        const allTodos = this.state.allTodos.slice();
        this.setState({ todos: allTodos });
    }

    showNew(){
        const completeTodos = this.state.allTodos.filter(function(todo) {
            return todo.isDone === false;
        });
        const firstTreeUncomplete = [];
        for(let i = 0; i < completeTodos.length; i++) {
            if(i<=2){
                firstTreeUncomplete.push(completeTodos[i]);
            }else break;
        }
        this.setState({ todos: firstTreeUncomplete });
    }

    showOverdue(){
        const now = Date.now();

        const terminatedTodos = this.state.allTodos.filter(function(todo) {
            return Date.parse(todo.deadLineDate) < now && todo.isDone != true;
        });
        this.setState({ todos: terminatedTodos });
    }

    showComplete(){
        const completeTodos = this.state.allTodos.filter(function(todo) {
            return todo.isDone === true;
        });
        this.setState({ todos: completeTodos });
    }

    _updateLocalStorage() {
        let todos = JSON.stringify(this.state.allTodos);
        localStorage.setItem('todos', todos);
    }

    _clearInputsHelper(){
        document.getElementById('inputTitle').value = '';
        document.getElementById('input').value = '';
        document.getElementById('fullDLD').value = '';
    }

    _showEditControl(){
        const addBtn = document.getElementById('add-btn');
        const saveBtn = document.getElementById('save-btn');
        const cancelBtn = document.getElementById('cancel-btn');
        addBtn.style.display = 'none';
        saveBtn.style.display = 'inline';
        cancelBtn.style.display = 'inline';
    }
}