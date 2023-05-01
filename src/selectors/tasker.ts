import { selector } from 'recoil';

import { taskerState } from 'atoms';
import { TodoList, Todo } from 'common/types';

export const todosSelector = selector<TodoList>({
  key: 'todosSelector',
  get: ({ get }) => get(taskerState),
});

export const todoSelector = (id: string) =>
  selector<Todo>({
    key: `todoSelector${id}`,
    get: ({ get }) => {
      const state = get(taskerState);

      return (state.find(t => t.id === id) || {}) as Todo;
    },
  });
