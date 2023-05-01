import { atom } from 'recoil';

import { TodoList } from 'types';
import { getTodos } from 'utils';

export const taskerState = atom<TodoList>({
  key: 'tasker',
  default: getTodos(),
});
