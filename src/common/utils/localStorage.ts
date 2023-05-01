import { LocalStorageKeys } from 'common/constants';
import { TodoList } from 'common/types';

export const setTodos = (todos: string) =>
  localStorage.setItem(LocalStorageKeys.todos, todos);

export const getTodos = (): TodoList => {
  const todos = localStorage.getItem(LocalStorageKeys.todos);

  return todos ? JSON.parse(todos) : [];
};
