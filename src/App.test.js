import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('renders initial state', () => {
    render(<App />);
    expect(screen.getByText('Start')).toBeInTheDocument();
    expect(screen.queryByText('Pause')).not.toBeInTheDocument();
    expect(screen.queryByText('Split')).not.toBeInTheDocument();
    expect(screen.queryByText('Reset')).not.toBeInTheDocument();
    expect(screen.queryByText('Resume')).not.toBeInTheDocument();
  });

  test('start function starts the timer', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Start'));
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText('Pause')).toBeInTheDocument();
    expect(screen.getByText('Split')).toBeInTheDocument();
    expect(screen.queryByText('Start')).not.toBeInTheDocument();
    expect(screen.queryByText('Reset')).not.toBeInTheDocument();
    expect(screen.queryByText('Resume')).not.toBeInTheDocument();
  });

  test('pause function pauses the timer', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Start'));
    fireEvent.click(screen.getByText('Pause'));
    expect(screen.getByText('Reset')).toBeInTheDocument();
    expect(screen.getByText('Resume')).toBeInTheDocument();
    expect(screen.queryByText('Start')).not.toBeInTheDocument();
    expect(screen.queryByText('Pause')).not.toBeInTheDocument();
    expect(screen.queryByText('Split')).not.toBeInTheDocument();

  });

  test('reset function resets the timer', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Start'));
    fireEvent.click(screen.getByText('Pause'));
    fireEvent.click(screen.getByText('Reset'));
    expect(screen.getByText('Start')).toBeInTheDocument();
    expect(screen.queryByText('Pause')).not.toBeInTheDocument();
    expect(screen.queryByText('Split')).not.toBeInTheDocument();
    expect(screen.queryByText('Reset')).not.toBeInTheDocument();
    expect(screen.queryByText('Resume')).not.toBeInTheDocument();
  });

  test('split function records the current time', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Start'));
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    fireEvent.click(screen.getByText('Split'));
    const firstSplitRecord = screen.getByText('1:');
    expect(firstSplitRecord).toBeInTheDocument();
  });
});
