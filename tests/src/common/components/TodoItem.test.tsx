import React from 'react';
import { render } from '@testing-library/react';

import TodoItem from 'common/components/TodoItem';

import { mockTodoItem } from '../../../mocks';

describe('TodoItem', () => {
  it('renders todo item with correct title and description', () => {
    const screen = render(
      <TodoItem id={mockTodoItem.id} todoItem={mockTodoItem} />,
    );

    expect(screen.getByText(mockTodoItem.title)).toBeInTheDocument();
    expect(screen.getByText(mockTodoItem.description)).toBeInTheDocument();
  });
});
