import React, { useState } from "react";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const URL = "http://localhost:8002/api/v1/user/register-user";

  function onSubmitHandler(e) {
    e.preventDefault();
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((data) => data.json())
      .then((res) => setUserInfo({ userName: "", email: "", password: "" }))
      .catch((error) => {
        console.log(`Error while registering User ${error}`);
      });
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <form
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"
        onSubmit={onSubmitHandler}
      >
        <h2 className="mb-2 text-center text-3xl font-bold text-gray-800">
          Create Account
        </h2>

        <p className="mb-8 text-center text-sm text-gray-500">
          Sign up to get started
        </p>

        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            value={userInfo.userName}
            onChange={(e) =>
              setUserInfo({ ...userInfo, userName: e.target.value })
            }
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            value={userInfo.email}
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            value={userInfo.password}
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Create Account
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
