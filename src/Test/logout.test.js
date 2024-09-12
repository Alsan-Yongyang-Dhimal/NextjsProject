import React from 'react';
import { render } from '@testing-library/react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Logout from "../pages/logout";


jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('js-cookie', () => ({
  remove: jest.fn(),
}));

test('logs out the user and redirects to login page', () => {
  const push = jest.fn();
  useRouter.mockReturnValue({ push });

  render(<Logout />);

  // Assert that cookies are removed and redirection occurs
  expect(Cookies.remove).toHaveBeenCalledWith('token');
  expect(push).toHaveBeenCalledWith('/login');
});
