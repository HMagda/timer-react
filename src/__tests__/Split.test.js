import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Split from '../Components/Split/Split';

describe('Split component', () => {
  test('renders without crashing', () => {
    render(<Split splitRecords={[]} />);
  });

  test('renders an empty table when no split records are present', () => {
    render(<Split splitRecords={[]} />);
    const table = screen.getByRole('table');
    const rows = within(table).queryAllByRole('row');
    expect(rows.length).toBe(0);
  });

  test('renders the correct number of split records', () => {
    const splitRecords = ['00:01:02:03', '00:02:03:04', '00:03:04:05'];
    render(<Split splitRecords={splitRecords} />);
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(splitRecords.length);
  });

  test('renders the correct split records', () => {
    const splitRecords = ['00:01:02:03', '00:02:03:04', '00:03:04:05'];
    render(<Split splitRecords={splitRecords} />);
    splitRecords.forEach((record, index) => {
      expect(screen.getByText(`${index + 1}:`)).toBeInTheDocument();
      expect(screen.getByText(record)).toBeInTheDocument();
    });
  });
});
