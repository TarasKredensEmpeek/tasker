import React from 'react';
import '@testing-library/jest-dom';

import TodoForm from 'common/components/TodoForm';

import { render, screen } from '../../test-utils';

describe('TodoForm', () => {
  test('renders TodoForm correctly', async () => {
    render(<TodoForm />);

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
