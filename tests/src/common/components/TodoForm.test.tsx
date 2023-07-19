import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import TodoForm from 'common/components/TodoForm';

import { getWrapper } from '../../../helpers';

const WrappedForm = getWrapper({ children: <TodoForm /> });

describe('TodoForm', () => {
  test('renders TodoForm correctly', async () => {
    render(WrappedForm);

    const titleNode = await screen.getByTitle('Title');
    const descriptionNode = await screen.getByTitle(
      'Type, what you want To Do...',
    );
    const submitButtonNode = await screen.getByText('Add');
    const dateNode = await screen.getByTitle('New Due Date');

    expect(dateNode).toBeInTheDocument();
    expect(titleNode).toBeInTheDocument();
    expect(descriptionNode).toBeInTheDocument();
    expect(submitButtonNode).toBeInTheDocument();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
