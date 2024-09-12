import { render, screen, waitFor } from '@testing-library/react';
import Task2 from '../pages/task2';
import React from 'react';
import { useRouter } from 'next/router';
import '@testing-library/jest-dom';



// Mock the Next.js useRouter hook
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Mock the global fetch function before each test
beforeEach(() => {
  global.fetch = jest.fn();
  useRouter.mockImplementation(() => ({
    replace: jest.fn(),
  }));
});

// Clean up mocks after each test
afterEach(() => {
  jest.restoreAllMocks();
});

test('renders user list when data is fetched successfully', async () => {
  // Mock a successful response
  global.fetch.mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve([
      { id: 1, name: 'Leanne Graham' },
      { id: 2, name: 'Ervin Howell' },
    ]),
  });

  render(<Task2 />);

  // Wait for the component to update with fetched data
  await waitFor(() => {
    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    expect(screen.getByText('Ervin Howell')).toBeInTheDocument();
  });
});

test('displays error message when fetching data fails', async () => {
  // Mock a failed response
  global.fetch.mockResolvedValueOnce({
    ok: false,
    json: () => Promise.resolve([]),
  });

  render(<Task2 />);

  // Wait for the component to update with error message
  await waitFor(() => {
    expect(screen.getByText('Failed to fetch usersList.')).toBeInTheDocument();
  });
});

test('displays no users message when users list is empty', async () => {
  // Mock a successful response with an empty list
  global.fetch.mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve([]),
  });

  render(<Task2 />);

  // Wait for the component to update with no users message
  await waitFor(() => {
    expect(screen.getByText('No users available.')).toBeInTheDocument();
  });
});
