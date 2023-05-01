import { selector } from 'recoil';

import { TodoList, Todo } from 'types';
import { taskerState } from 'atoms';

export const todosSelector = selector<TodoList>({
  key: 'todosSelector',
  get: ({ get }) => get(taskerState),
});

export const todoSelector = (id: string) =>
  selector<Todo>({
    key: 'todoSelector',
    get: ({ get }) => {
      const state = get(taskerState);

      return state.find(t => t.id === id) as Todo;
    },
  });
