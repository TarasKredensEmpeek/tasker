import { atom } from 'recoil';

import { TodoList } from 'common/types';
import { getTodos } from 'common/utils';

export const taskerState = atom<TodoList>({
  key: 'tasker',
  default: getTodos(),
});
