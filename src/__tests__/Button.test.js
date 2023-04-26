import {render, screen, fireEvent} from '@testing-library/react';
import Button from '../Components/Button/Button';

test('renders Start button when status is 0', () => {
  render(<Button status={0} />);
  expect(screen.getByText('Start')).toBeInTheDocument();
  expect(screen.queryByText('Pause')).not.toBeInTheDocument();
  expect(screen.queryByText('Split')).not.toBeInTheDocument();
  expect(screen.queryByText('Reset')).not.toBeInTheDocument();
  expect(screen.queryByText('Resume')).not.toBeInTheDocument();
});

test('renders Split and Pause buttons when status is 1', () => {
  render(<Button status={1} />);
  expect(screen.getByText('Split')).toBeInTheDocument();
  expect(screen.getByText('Pause')).toBeInTheDocument();
  expect(screen.queryByText('Start')).not.toBeInTheDocument();
  expect(screen.queryByText('Reset')).not.toBeInTheDocument();
  expect(screen.queryByText('Resume')).not.toBeInTheDocument();
});

test('renders Reset and Resume buttons when status is 2', () => {
  render(<Button status={2} />);
  expect(screen.getByText('Reset')).toBeInTheDocument();
  expect(screen.getByText('Resume')).toBeInTheDocument();
  expect(screen.queryByText('Start')).not.toBeInTheDocument();
  expect(screen.queryByText('Split')).not.toBeInTheDocument();
  expect(screen.queryByText('Pause')).not.toBeInTheDocument();
});

test('clicking Stop button calls stop function', () => {
  const mockStop = jest.fn();
  render(<Button status={1} stop={mockStop} />);
  fireEvent.click(screen.getByText('Pause'));
  expect(mockStop).toHaveBeenCalled();
});

test('clicking Start button calls start function', () => {
  const mockStart = jest.fn();
  render(<Button status={0} start={mockStart} />);
  fireEvent.click(screen.getByText('Start'));
  expect(mockStart).toHaveBeenCalled();
});

test('clicking Reset button calls reset function', () => {
  const mockReset = jest.fn();
  render(<Button status={2} reset={mockReset} />);
  fireEvent.click(screen.getByText('Reset'));
  expect(mockReset).toHaveBeenCalled();
});

test('clicking Split button calls split function', () => {
  const mockSplit = jest.fn();
  render(<Button status={1} split={mockSplit} />);
  fireEvent.click(screen.getByText('Split'));
  expect(mockSplit).toHaveBeenCalled();
});

test('clicking Resume button calls start function', () => {
  const mockStart = jest.fn();
  render(<Button status={2} start={mockStart} />);
  fireEvent.click(screen.getByText('Resume'));
  expect(mockStart).toHaveBeenCalled();
});
