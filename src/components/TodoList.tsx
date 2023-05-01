import React from 'react';
import { useRecoilValue } from 'recoil';

import { taskerState } from 'atoms';

import Todo from './TodoItem';

const TodoList = () => {
  const todos = useRecoilValue(taskerState);

  return (
    <div className="todo-list">
      <ul>
        {todos.map(todo => (
          <Todo id={todo.id} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
