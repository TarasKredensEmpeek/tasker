import React from 'react';
import { createUseStyles } from 'react-jss';

import { useTodosState } from 'hooks';
import { Todo } from 'common/types';

import TodoItem from './TodoItem';

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
    <div className={list} title="todoList">
      {filteredTodos.map((todo: Todo) => (
        <TodoItem id={String(todo.id)} todoItem={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
