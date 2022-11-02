import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passwordVerify, setpasswordVerify] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    const registerData = {
      email,
      username,
      password,
      passwordVerify,
      firstName,
      lastName,
    };
    try {
      await axios.post("http://localhost:4000/api/auth", registerData);
    } catch (err) {
      console.log(err.response.data.msg);
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="lg:h-screen flex flex-col justify-center my-5 lg:my-0">
      <ul
        id="progressbar"
        className="relative flex justify-between items-center text-sm text-gray-500 list-none mx-2"
      >
        <li
          className={`${currentStep === 1 ? "text-blue-500" : "text-gray-500"}`}
        >
          <span
            className={`${
              currentStep === 1 || currentStep > 1
                ? "border-blue-500"
                : "border-gray-500"
            } flex items-center justify-center w-8 h-8 mx-auto border-2 rounded-full`}
          >
            1
          </span>
        </li>

        <div className="bg-gray-500 h-1 w-full transition-all duration-1000">
          <div
            className={`${
              currentStep > 1 ? "w-full" : "w-0"
            } bg-blue-500 h-1 transition-all duration-1000`}
          ></div>
        </div>

        <li
          className={`${currentStep === 2 ? "text-blue-500" : "text-gray-500"}`}
        >
          <span
            className={
              currentStep === 3 || currentStep === 2
                ? "flex items-center justify-center w-8 h-8 mx-auto border-2 border-blue-500 rounded-full transition-all duration-1000"
                : "flex items-center justify-center w-8 h-8 mx-auto border-2 border-gray-500 rounded-full transition-all duration-1000"
            }
          >
            2
          </span>
        </li>

        <div className="bg-gray-500 h-1 w-full transition-all duration-1000">
          <div
            className={`${
              currentStep > 2 ? "w-full" : "w-0"
            } bg-blue-500 h-1 transition-all duration-1000`}
          ></div>
        </div>

        <li
          className={`${currentStep === 3 ? "text-blue-500" : "text-gray-500"}`}
        >
          <span
            className={
              currentStep === 3
                ? "flex items-center justify-center w-8 h-8 mx-auto border-2 border-blue-500 rounded-full transition-all duration-1000"
                : "flex items-center justify-center w-8 h-8 mx-auto border-2 border-gray-500 rounded-full transition-all duration-1000"
            }
          >
            3
          </span>
        </li>
      </ul>
      <div className="flex justify-between">
        <span
          className={`${
            currentStep === 1 ? "text-blue-500" : "text-gray-500"
          } text-xs`}
        >
          Account
        </span>
        <span
          className={`${
            currentStep === 2 ? "text-blue-500" : "text-gray-500"
          } text-xs`}
        >
          Personal
        </span>
        <span
          className={`${
            currentStep === 3 ? "text-blue-500" : "text-gray-500"
          } text-xs`}
        >
          Confirm
        </span>
      </div>
      <form
        onSubmit={register}
        className="lg:w-[400px] bg-gray-500 rounded-md py-5"
      >
        {currentStep === 1 && (
          <div className="flex flex-col mx-10 mb-5">
            <div className="text-center">
              <h1>Create Your Account</h1>
              <h2>Account Information</h2>
            </div>
            <label htmlFor="email">Email</label>
            <input
              className="focus:outline-black px-2 py-2 rounded-md"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="username">Username</label>
            <input
              className="focus:outline-black px-2 py-2 rounded-md"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="password">Password</label>

            <input
              className="focus:outline-black px-2 py-2 rounded-md"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="passwordVerify">Confirm Password</label>
            <input
              className="focus:outline-black px-2 py-2 rounded-md"
              type="password"
              name="passwordVerify"
              id="passwordVerify"
              placeholder="Confirm Password"
              value={passwordVerify}
              onChange={(e) => setpasswordVerify(e.target.value)}
            />
          </div>
        )}

        {currentStep === 2 && (
          <div className="flex flex-col mx-10 mb-5">
            <div className="text-center">
              <h1>Create Your Account</h1>
              <h2>Personal Information</h2>
            </div>

            <label htmlFor="firstName">First Name</label>
            <input
              className="focus:outline-black px-2 py-2 rounded-md"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              className="focus:outline-black px-2 py-2 rounded-md"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        )}

        {currentStep === 3 && (
          <div className="flex flex-col  mb-1 relative">
            <div className={`${error ? "pb-16" : "pb-0"} text-center`}>
              <h1>Create Your Account</h1>
              <h2>Confirm Information</h2>
            </div>

            <div
              className={`${
                error ? "opacity-1" : "opacity-0"
              } absolute top-14 w-full bg-red-500 text-white text-center rounded-md py-2 mb-5 transition-all duration-500`}
            >
              {error}
            </div>
            <div className="flex flex-col mx-10">
              <label htmlFor="email">Email</label>
              <input
                className="focus:outline-black px-2 py-2 rounded-md"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="username">Username</label>
              <input
                className="focus:outline-black px-2 py-2 rounded-md"
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label htmlFor="firstName">First Name</label>
              <input
                className="focus:outline-black px-2 py-2 rounded-md"
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <label htmlFor="lastName">Last Name</label>
              <input
                className="focus:outline-black px-2 py-2 rounded-md"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
        )}

        <div className="flex justify-between mx-10 ">
          {currentStep !== 1 && (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
              className="bg-blue-500 text-white px-5 py-2 rounded-md"
            >
              Back
            </button>
          )}
          {currentStep !== 3 && (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep + 1)}
              className={`${
                currentStep === 1 ? "w-full" : "w-auto"
              } bg-blue-500 text-white px-5 py-2 rounded-md`}
            >
              Next
            </button>
          )}
          {currentStep === 3 && (
            <button
              type="submit"
              className="bg-blue-500 text-white px-5 py-2 rounded-md"
            >
              Submit
            </button>
          )}
        </div>
        <div className="flex flex-col gap-1 mx-10 my-3 text-center">
          <p>
            Already have an account?
            <span
              onClick={() => navigate("/signin")}
              className="text-blue-500 ml-2 cursor-pointer"
            >
              Sign In
            </span>
          </p>

          <p>
            By signing up, you agree to our{" "}
            <a href="/terms">Terms of Service</a> and{" "}
            <a href="/privacy">Privacy Policy</a>
          </p>

          <p>
            <a href="/forgot-password">Forgot Password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
