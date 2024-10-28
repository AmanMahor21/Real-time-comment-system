"use client";

import React, { createContext, useContext, useState } from "react";

// Create a context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    sessionID: "",
  });

  return (
    <UserContext.Provider
      value={{
        setUserInfo,
        userInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};
