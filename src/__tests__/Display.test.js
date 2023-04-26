import {render, screen} from '@testing-library/react';
import Display, {NormalizeNumber} from '../Components/Display/Display';

test('renders Display component with given time values', () => {
  render(<Display time={{ms: 23, s: 5, m: 3, h: 1}} />);
  const hours = screen.getByTestId('time-h');
  const minutes = screen.getByTestId('time-m');
  const seconds = screen.getByTestId('time-s');
  const milliseconds = screen.getByTestId('time-ms');

  expect(hours).toHaveTextContent('01');
  expect(minutes).toHaveTextContent('03');
  expect(seconds).toHaveTextContent('05');
  expect(milliseconds).toHaveTextContent('23');
});

test('NormalizeNumber function', () => {
  expect(NormalizeNumber(5)).toBe('05');
  expect(NormalizeNumber(12)).toBe(12);
  expect(NormalizeNumber('5')).toBe('05');
  expect(NormalizeNumber('12')).toBe('12');
});
