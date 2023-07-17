import React from 'react';
import {
  act,
  render,
  screen,
  fireEvent,
  renderHook,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import { useTodosState } from 'hooks';
import TodoItem from 'common/components/TodoItem';
import { Todo } from 'common/types';

import { mockTodoItem } from '../../../mocks';
import { getWrapper } from '../../../helpers';

const getUseTodoState = () => {
  const renderedUseState = renderHook(useTodosState, { wrapper: getWrapper });

  const { todos, addTodo } = renderedUseState.result.current;

  if (!todos?.length) {
    act(() => {
      addTodo(mockTodoItem);
    });
  }

  return renderedUseState;
};

const todoItemWithWrappers = (item: Todo) =>
  getWrapper({ children: <TodoItem id={item.id} todoItem={item} /> });

describe('TodoItem', () => {
  const todoItemRenderer = (todoItem: Todo) =>
    render(todoItemWithWrappers(todoItem));

  test('render todo item', () => {
    todoItemRenderer(mockTodoItem);
  });

  test('marks todo item as completed when checkbox is clicked', () => {
    const { rerender } = todoItemRenderer(mockTodoItem);
    const { result } = getUseTodoState();

    const completed = !(
      result.current.getTodoById(mockTodoItem.id)?.completed ||
      mockTodoItem.completed
    );

    const checkbox = screen.getByTitle('Set as Complete?') as HTMLInputElement;
    fireEvent.click(checkbox);

    act(() => {
      result.current.toggleTodoComplete(mockTodoItem.id);
    });

    const todo = result.current.getTodoById(mockTodoItem.id);

    expect(todo?.completed).toBe(completed);

    if (todo) {
      rerender(todoItemWithWrappers(todo));
      expect(checkbox.checked).toBe(completed);
    }
  });

  test('calls onEdit function when edit button is clicked', () => {
    const { result } = getUseTodoState();

    const { rerender } = todoItemRenderer(mockTodoItem);
    const editButton = screen.getByTitle('Edit');
    fireEvent.click(editButton);

    const todoTitle = screen.getByTitle(`todoTitle-${mockTodoItem.id}`);
    expect(todoTitle).toHaveTextContent(mockTodoItem.title);
    // another variant of search
    // expect(screen.getByText(mockTodoItem.title)).toBeTruthy();

    const newTitle = 'Test todo EDITED';

    act(() => {
      result.current.updateTodo({ ...mockTodoItem, title: newTitle });
    });

    const newTodo = result.current.getTodoById(mockTodoItem.id);

    if (newTodo) {
      rerender(todoItemWithWrappers(newTodo));
      expect(todoTitle).toHaveTextContent(newTitle);
      // useful for global search
      // expect(screen.getByText(newTitle)).toBeInTheDocument();
      expect(todoTitle).not.toHaveTextContent(mockTodoItem.title);
    }
  });

  test('calls onDelete function when delete button is clicked', () => {
    const { result } = getUseTodoState();

    todoItemRenderer(mockTodoItem);
    const deleteButton = screen.getByTitle('Delete');
    fireEvent.click(deleteButton);

    const todoNode = screen.getByTitle(`todo-${mockTodoItem.id}`);

    expect(todoNode).toHaveStyle({ display: 'block' });

    act(() => {
      result.current.removeTodo(mockTodoItem.id);
    });

    const todo = result.current.getTodoById(mockTodoItem.id);
    expect(todo).toBe(undefined);
  });
});
