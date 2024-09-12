import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import React from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    // If a token exists, redirect to the dashboard
    const token = Cookies.get("token");
    if (token) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleLogin = (e) => {
    e.preventDefault();

    const userDetails = { username: "user", password: "user" };

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    if (
      username === userDetails.username &&
      password === userDetails.password
    ) {
      const token = "sample-token";
      Cookies.set("token", token, {
        expires: 1,
        sameSite: "None",
        secure: true,
      });
      router.push("/dashboard");
    } else {
      setError("Incorrect username or password.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div>
            <label className="block text-gray-700 mb-2 font-medium text-lg">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none  "
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium text-lg">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none "
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-rose-500 text-white py-2 text-lg px-8 rounded-full shadow-md hover:bg-rose-600 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
