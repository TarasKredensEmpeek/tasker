import { TodoList } from '@appTypes';
import { LocalStorageKeys } from '@constants';

export const setTodos = (todos: string) =>
  localStorage.setItem(LocalStorageKeys.todos, todos);

export const getTodos = (): TodoList => {
  const todos = localStorage.getItem(LocalStorageKeys.todos);

  return todos ? JSON.parse(todos) : [];
};
