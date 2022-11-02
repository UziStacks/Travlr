import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext({
  isAuthenticated: undefined,
  setIsAuthenticated: () => {},
  getLoggedIn: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  const getLoggedIn = async () => {
    const loggedInRes = await axios.get(
      "http://localhost:4000/api/auth/loggedin",
      {
        withCredentials: true,
      }
    );
    setIsAuthenticated(loggedInRes.data);
  };

  useEffect(() => {
    getLoggedIn();
  }, []);

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    getLoggedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
