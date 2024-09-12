import React from 'react';
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import ProtecteRoute from "../HOC/protectedRoute";

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('js-cookie', () => ({
  get: jest.fn(),
}));

const MockComponent = () => <div>Mock Component</div>;


  test('redirects unauthenticated users to the login page', () => {
    const replace = jest.fn(); // Mock function to track redirection
    useRouter.mockReturnValue({ replace });

    Cookies.get.mockReturnValue(null); // Simulate no token present

    // Wrap MockComponent with ProtecteRoute
    const WrappedComponent = ProtecteRoute(MockComponent);

    // Render the WrappedComponent, which is a protected route
    render(<WrappedComponent />);

    // Assert that router.replace was called with '/login'
    expect(replace).toHaveBeenCalledWith('/login');
  });
