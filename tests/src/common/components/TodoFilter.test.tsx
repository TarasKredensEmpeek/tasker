import React from 'react';
import '@testing-library/jest-dom';

import TodoFilter from 'common/components/TodoFilter';

import { render, fireEvent, screen, waitFor } from '../../test-utils';

describe('TodoFilter', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test('renders TodoFilter correctly', () => {
    render(<TodoFilter />);

    // Assert that all filter labels are rendered
    const filterLabels = screen.getAllByText(
      /(All|Overdue|Completed|Uncompleted)/i,
    );
    expect(filterLabels.length).toBe(4);

    // Assert that the first filter is active by default
    const firstFilterClassName = filterLabels[0].className;
    expect(firstFilterClassName.includes('itemActive')).toBe(true);
  });

  test('changes the active filter when clicked', async () => {
    const { rerender } = render(<TodoFilter />);

    ['Completed', 'Overdue'].map(async filterText => {
      // Click on the 'Completed' filter
      const completedFilter = screen.getByText(filterText);
      fireEvent.click(completedFilter);

      rerender(<TodoFilter />);

      await waitFor(() => {
        // Assert that the active filter has changed to 'Completed'
        const firstFilterClassName = completedFilter.className;
        expect(firstFilterClassName.includes('itemActive')).toBe(true);
      });
    });
  });
});
