import React from 'react';

import InputBox from 'components/InputBox';
// import TodoList from 'components/TodoList';

const Tasker = () => (
  // const [state, setState] = useState({
  //   todos: [],
  //   allTodos: [],
  //   editedTodoId: '',
  //   isTitleCorrect: true
  // });
  //
  // useEffect(() => {
  //   const localTodos = JSON.parse(localStorage.getItem('todos'));
  //
  //   if (localTodos) {
  //     setState(p => ({ ...p, todos: localTodos, allTodos: localTodos }))
  //   }
  // }, []);
  //
  // useEffect(() => {
  //
  //   const todos = JSON.stringify(state.allTodos);
  //   localStorage.setItem('todos', todos);
  // }, [])
  //
  // const handleTodoAdd = (newTodo) => {
  //   const newTodos = state.todos.slice();
  //   newTodos.unshift(newTodo);
  //
  //   setState(p => ({ ...p, todos: newTodos, allTodos: newTodos }));
  //   _clearInputsHelper();
  //
  // }
  //
  // const handleTodoDelete = (todo) => {
  //   const todoId = todo.id;
  //   const newTodos = state.todos.filter(function (todo) {
  //     return todo.id !== todoId;
  //   });
  //
  //   setState(p => ({ ...p, todos: newTodos, allTodos: newTodos }));
  // }
  //
  // const handleTodoEdit = (editedTodo) => {
  //   const title = document.getElementById('inputTitle');
  //   const description = document.getElementById('input');
  //
  //   title.value = editedTodo.title;
  //   description.value = editedTodo.description;
  //
  //   document.getElementById('fullDLD').value = editedTodo.deadLineDate;
  //
  //   _showEditControl();
  //
  //   setState(p => ({
  //     ...p,
  //     editedTodoId: editedTodo.id,
  //     editedTitle: editedTodo.title,
  //     editedDescription: editedTodo.description
  //   }));
  // }
  //
  // const handleTodoSave = (title, description, deadLineDate, editedId) => {
  //   const todosArr = state.todos.slice();
  //   let newTodosArr = [];
  //
  //   const currentTodo = state.todos.filter((todo) => todo.id == editedId);
  //
  //   currentTodo[0].title = title;
  //   currentTodo[0].description = description;
  //   currentTodo[0].deadLineDate = deadLineDate;
  //
  //   for (let i = 0; i < todosArr.length; i++) {
  //     if (currentTodo.id != todosArr[i].id) {
  //       newTodosArr.push(todosArr[i]);
  //     } else newTodosArr.push(currentTodo);
  //   }
  //
  //   setState(p => ({
  //     ...p,
  //     todos: newTodosArr
  //   }));
  //
  //   _clearInputsHelper();
  // }
  //
  // const handleCheckedValue = (todo) => {
  //   const todoId = todo.id;
  //   const todosArr = state.todos.slice();
  //
  //   let newTodosArr = [];
  //   const currentTodo = state.todos.find((todo) => todo.id == todoId);
  //
  //   if (!todo.isDone) {
  //     const date = new Date();
  //     currentTodo.isDone = true;
  //     currentTodo.checked = 'checked';
  //     currentTodo.finishDate = date.toLocaleString();
  //
  //     for (let i = 0; i < todosArr.length; i++) {
  //       if (currentTodo.id != todosArr[i].id) {
  //         newTodosArr.push(todosArr[i]);
  //       } else newTodosArr.push(currentTodo);
  //     }
  //   } else {
  //     currentTodo.isDone = false;
  //     currentTodo.checked = '';
  //     currentTodo.finishDate = '';
  //     for (let i = 0; i < todosArr.length; i++) {
  //       if (currentTodo.id != todosArr[i].id) {
  //         newTodosArr.push(todosArr[i]);
  //       } else newTodosArr.push(currentTodo);
  //     }
  //   }
  //   setState(p => ({
  //     ...p,
  //     todos: newTodosArr
  //   }));
  // }
  //
  // const showAll = () => {
  //   const allTodos = state.allTodos.slice();
  //   setState(p => ({ ...p, todos: allTodos }));
  // }
  //
  // const showNew = () => {
  //   const completeTodos = state.allTodos.filter((todo) => !todo.isDone);
  //   const firstTreeUncomplete = [];
  //
  //   for (let i = 0; i < completeTodos.length; i++) {
  //     if (i <= 2) {
  //       firstTreeUncomplete.push(completeTodos[i]);
  //     } else break;
  //   }
  //
  //   setState(p => ({ ...p, todos: firstTreeUncomplete }));
  // }
  //
  // const showOverdue = () => {
  //   const now = Date.now();
  //
  //   const terminatedTodos = state.allTodos.filter((todo) =>
  //     Date.parse(todo.deadLineDate) < now && !todo.isDone
  //   );
  //   setState(p => ({ ...p, todos: terminatedTodos }));
  // }
  //
  // const showComplete = () => {
  //   const completeTodos = state.allTodos.filter((todo) => todo.isDone);
  //   setState(p => ({ ...p, todos: completeTodos }));
  // }
  //
  // const _clearInputsHelper = () => {
  //   document.getElementById('inputTitle').value = '';
  //   document.getElementById('input').value = '';
  //   document.getElementById('fullDLD').value = '';
  // }
  //
  // const _showEditControl = () => {
  //   const addBtn = document.getElementById('add-btn');
  //   const saveBtn = document.getElementById('save-btn');
  //   const cancelBtn = document.getElementById('cancel-btn');
  //   addBtn.style.display = 'none';
  //   saveBtn.style.display = 'inline';
  //   cancelBtn.style.display = 'inline';
  // }

  <div className="todo-app">
    <h2 className="app-header">Task List</h2>

    <InputBox
    // onTodoAdd={handleTodoAdd}
    // onTodoSave={handleTodoSave}
    // editedTodoId={state.editedTodoId}
    // clearInuts={_clearInputsHelper}
    />

    {/*  <TodoList*/}
    {/*    todos={state.todos}*/}
    {/*    onTodoDelete={handleTodoDelete}*/}
    {/*    onTodoEdit={handleTodoEdit}*/}
    {/*    onCheckedValue={handleCheckedValue}*/}
    {/*  />*/}

    {/*  <div className="nav">*/}
    {/*    <ul className="nav-list">*/}
    {/*      <li>*/}
    {/*        <a href="#" className="nav-elem" onClick={showAll}> All </a>*/}
    {/*      </li>*/}
    {/*      <li>*/}
    {/*        <a href="#" className="nav-elem" onClick={showNew}> New </a>*/}
    {/*      </li>*/}
    {/*      <li>*/}
    {/*        <a href="#" className="nav-elem" onClick={showOverdue}> Overdue </a>*/}
    {/*      </li>*/}
    {/*      <li>*/}
    {/*        <a href="#" className="nav-elem" onClick={showComplete}>Completed</a>*/}
    {/*      </li>*/}
    {/*    </ul>*/}
    {/*  </div>*/}
  </div>
);
export default Tasker;
