import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { getLoggedIn } = useContext(AuthContext);

  const login = async (e) => {
    e.preventDefault();
    try {
      const loginData = {
        email,
        password,
      };
      await axios.post("http://localhost:4000/api/auth/login", loginData);
      await getLoggedIn();
      navigate("/dashboard");
    } catch (err) {
      console.log(err.response.data.msg);
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center mx-5">
      <form
        onSubmit={login}
        className="relative lg:w-[400px] bg-gray-500 rounded-md py-5"
      >
        <h1
          className={`${
            error ? "pb-16" : "pb-0"
          } text-center text-3xl py-5 font-bold transition-all duration-500`}
        >
          <span className="text-blue-500">Sign</span> In
        </h1>

        <div
          className={`${
            error ? "opacity-1" : "opacity-0"
          } absolute top-20 w-full bg-red-500 text-white text-center rounded-md py-2 mb-5 transition-all duration-500`}
        >
          {error}
        </div>

        <div className="flex flex-col mx-10 mb-5 gap-2">
          <input
            type="text"
            placeholder="email"
            className="border-2 border-gray-500 rounded-md p-2"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="password"
            className="border-2 border-gray-500 rounded-md p-2"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            className="bg-blue-500 text-white rounded-md p-2"
            type="submit"
          >
            Submit
          </button>
        </div>

        <div className="flex justify-center mt-5 ">
          <span className="text-black">Don't have an account?</span>
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-500 ml-2 cursor-pointer"
          >
            Sign Up
          </span>
        </div>

        <div className="flex justify-center mt-2">
          <span className="text-black">Forgot your password?</span>
          <span className="text-blue-500 ml-2">Reset Password</span>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
