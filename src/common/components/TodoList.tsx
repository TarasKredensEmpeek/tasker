import React from 'react';
import { createUseStyles } from 'react-jss';

import Todo from './TodoItem';
import { useTodosState } from '../../hooks';

const useStyles = createUseStyles({
  list: {
    height: 'calc(100vh - 370px)',
    overflowY: 'auto',
    padding: '10px 16px',
  },
});

const TodoList = () => {
  const { list } = useStyles();
  const { filteredTodos } = useTodosState();

  return (
    <div className={list}>
      {filteredTodos.map(todo => (
        <Todo id={todo.id} todoItem={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
