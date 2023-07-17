import { useCallback, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { useSearchParams } from 'react-router-dom';

import { taskerState } from 'atoms';
import { TodoTypes } from 'common/constants';
import { TodoList, Todo } from 'common/types';
import { setTodos, removeItemAtIndex, replaceItemAtIndex } from 'common/utils';

const useTodosState = () => {
  const [searchParams] = useSearchParams();
  const [todos, setTodoList] = useRecoilState(taskerState);

  const filter = useMemo(() => searchParams.get('filter'), [searchParams]);

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
          return todos.filter(t => t.completed);
        case TodoTypes.uncompleted:
          return todos.filter(t => !t.completed);
        case TodoTypes.overdue:
          return todos.filter(t => Date.parse(t.dueDate) < Date.now());
        default:
          return todos;
      }
    },
    [todos],
  );

  const getTodoById = useCallback(
    (id: string) => todos.find(t => t.id === id),
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

  const toggleTodoComplete = useCallback(
    (id: string) => {
      const todo = getTodoById(id);
      const completed = !todo?.completed;
      const completedAt = completed ? new Date().toISOString() : undefined;

      updateTodo({ ...(todo || {}), completed, completedAt } as Todo);
    },
    [getTodoById, updateTodo],
  );

  const filteredTodos = useMemo(
    () => getTodos(Number(filter || 0)),
    [filter, getTodos],
  );

  return useMemo(
    () => ({
      todos,
      addTodo,
      getTodos,
      setTodos: handleSetTodoList,
      updateTodo,
      removeTodo,
      getTodoById,
      filteredTodos,
      toggleTodoComplete,
    }),
    [
      todos,
      addTodo,
      getTodos,
      removeTodo,
      updateTodo,
      getTodoById,
      filteredTodos,
      handleSetTodoList,
      toggleTodoComplete,
    ],
  );
};

export default useTodosState;
