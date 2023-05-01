import { useCallback, useMemo } from 'react';
import { useRecoilState } from 'recoil';

import { taskerState } from 'atoms';
import { TodoTypes } from '@constants';
import { TodoList, Todo } from '@appTypes';
import { setTodos, removeItemAtIndex, replaceItemAtIndex } from 'utils';

const useTodosState = () => {
  const [todos, setTodoList] = useRecoilState(taskerState);

  const handleSetTodoList = useCallback(
    (todoList: TodoList) => {
      setTodos(JSON.stringify(todoList));
      setTodoList(todoList);
    },
    [setTodoList],
  );

  const getTodos = useCallback(
    (todoType?: TodoTypes) => {
      if (!todoType) {
        return todos;
      }

      switch (todoType) {
        case TodoTypes.completed:
          return todos.filter;
        case TodoTypes.uncompleted:
          return todos;
        case TodoTypes.overdue:
          return todos;
        default:
          return todos;
      }
    },
    [todos],
  );

  const addTodo = useCallback(
    (todo: Todo) => {
      const newTodos: TodoList = [...todos, todo];

      handleSetTodoList(newTodos);
    },
    [todos, handleSetTodoList],
  );

  const updateTodo = useCallback(
    (todo: Todo) => {
      const todoIndex = todos.findIndex(t => t.id === todo.id);

      if (todoIndex < 0) {
        return;
      }

      const newTodos = replaceItemAtIndex(todos, todoIndex, todo) as TodoList;

      handleSetTodoList(newTodos);
    },
    [todos, handleSetTodoList],
  );

  const removeTodo = useCallback(
    (id: string) => {
      const todoIndex = todos.findIndex(t => t.id === id);

      if (todoIndex < 0) {
        return;
      }

      const newTodos = removeItemAtIndex(todos, todoIndex) as TodoList;
      handleSetTodoList(newTodos);
    },
    [handleSetTodoList, todos],
  );

  return useMemo(
    () => ({
      todos,
      addTodo,
      getTodos,
      setTodos: handleSetTodoList,
      updateTodo,
      removeTodo,
    }),
    [todos, addTodo, getTodos, removeTodo, updateTodo, handleSetTodoList],
  );
};

export default useTodosState;
