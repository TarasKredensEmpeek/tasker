import React from 'react';
import { screen, fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import Tasker from 'modules/Tasker';

import { mockTodoItem } from '../../mocks';
import { getWrapper } from '../../helpers';

const WrappedForm = getWrapper({ children: <Tasker /> });

const newTodo = mockTodoItem;

describe('Tasker', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });

  test('handles add todo', async () => {
    render(WrappedForm);

    const titleNode = await screen.getByPlaceholderText('Title');
    const descriptionNode = await screen.getByPlaceholderText(
      'Type, what you want To Do...',
    );
    const submitButtonNode = await screen.getByTitle('AddSubmit');

    await waitFor(() => {
      fireEvent.input(titleNode, { target: { value: newTodo.title } });
      fireEvent.input(descriptionNode, {
        target: { value: newTodo.description },
      });
    });

    fireEvent.click(submitButtonNode);

    await waitFor(async () => {
      expect(titleNode).toHaveValue('');
      expect(descriptionNode).toHaveValue('');
    });
  });

  test('handle edit todo', async () => {
    render(WrappedForm);

    const submitButtonNode = await screen.getByTitle('AddSubmit');
    const titleNode = await screen.getByTitle('Title');
    const descriptionNode = await screen.getByTitle(
      'Type, what you want To Do...',
    );

    await waitFor(() => {
      fireEvent.input(titleNode, { target: { value: newTodo.title } });
      fireEvent.input(descriptionNode, {
        target: { value: newTodo.description },
      });

      fireEvent.click(submitButtonNode);
    });

    const todoNode = await screen.findByTestId(`todo-${newTodo.title}`);
    const editButton = todoNode.querySelector(`[title=Edit]`);

    expect(editButton).toBeInTheDocument();

    fireEvent.click(editButton as Element);

    await waitFor(async () => {
      expect(titleNode).toHaveValue(mockTodoItem.title);
      expect(descriptionNode).toHaveValue(mockTodoItem.description);
    });

    const editButtonNode = await screen.getByTitle('SaveSubmit');
    const newDescription = `${mockTodoItem.description}UPDATED!`;

    fireEvent.input(descriptionNode, {
      target: { value: newDescription },
    });

    fireEvent.click(editButtonNode);

    expect(descriptionNode).toHaveValue(newDescription);

    await waitFor(async () => {
      expect(titleNode).toHaveValue('');
      expect(descriptionNode).toHaveValue('');
    });
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
