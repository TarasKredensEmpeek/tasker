import React from 'react';

import Todo from './TodoItem';
import { useTodosState } from '../../hooks';

const TodoList = () => {
  const { filteredTodos } = useTodosState();

  return (
    <div className="todo-list">
      <ul>
        {filteredTodos.map(todo => (
          <Todo id={todo.id} todoItem={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
