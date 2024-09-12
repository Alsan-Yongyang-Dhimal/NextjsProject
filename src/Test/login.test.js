import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Login from "../pages/login";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("js-cookie", () => ({
  get: jest.fn(),
  set: jest.fn(),
}));

// Test Redirection for Authenticated Users
test("redirects to dashboard if token exists", () => {
  // Mock router and cookies
  const push = jest.fn();
  useRouter.mockReturnValue({ push });
  Cookies.get.mockReturnValue("sample-token"); // Simulate an existing token

  render(<Login />);

  // Check if the router push was called with the dashboard URL
  expect(push).toHaveBeenCalledWith("/dashboard");
});

// Test Successful Login
test("redirects to dashboard upon successful login", () => {
  const push = jest.fn();
  useRouter.mockReturnValue({ push });

  render(<Login />);

  fireEvent.change(screen.getByPlaceholderText("Enter your username"), {
    target: { value: "user" },
  });
  fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
    target: { value: "user" },
  });
  fireEvent.click(screen.getByRole("button", { name: /login/i }));

  // Assert that cookies are set and redirection occurs
  expect(Cookies.set).toHaveBeenCalledWith(
    "token",
    "sample-token",
    expect.any(Object)
  );
  expect(push).toHaveBeenCalledWith("/dashboard");
});

// Test Error Handling for Missing Credentials
test("displays an error message for missing credentials", () => {
  render(<Login />);

  // Click login without entering credentials
  fireEvent.click(screen.getByRole("button", { name: /login/i }));

  // Assert that error message is shown
  expect(
    screen.getByText("Please enter both username and password.")
  ).toBeInTheDocument();
});

// Test Error Handling for Incorrect Credentials
test("displays an error message for incorrect credentials", () => {
  render(<Login />);

  // Fill in the form with incorrect credentials
  fireEvent.change(screen.getByPlaceholderText("Enter your username"), {
    target: { value: "wronguser" },
  });
  fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
    target: { value: "wrongpassword" },
  });
  fireEvent.click(screen.getByRole("button", { name: /login/i }));

  // Assert that error message is shown
  expect(
    screen.getByText("Incorrect username or password.")
  ).toBeInTheDocument();
});
