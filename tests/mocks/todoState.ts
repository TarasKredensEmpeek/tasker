import { act, renderHook } from '@testing-library/react';

import { useTodosState } from '../../src/hooks';
import { getWrapper } from '../helpers';
import { mockTodoItem, mockTodoList } from './todos';

export const getUseTodoState = (withoutInitial = false) => {
  const renderedUseState = renderHook(useTodosState, {
    wrapper: getWrapper,
    initialProps: { todos: mockTodoList },
  });

  const { todos, addTodo } = renderedUseState.result.current;

  if (!todos?.length && !withoutInitial) {
    act(() => {
      addTodo(mockTodoItem);
    });
  }

  return renderedUseState;
};
