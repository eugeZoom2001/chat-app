import React from "react";
import { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const initState = {
    user: "mongo",
    id: "12345",
    token: "",
    isLogged: true,
    isLoggedChat: false,
    socket: null,
    channel: "global",
  };
  const [dataUser, setDataUser] = useState(initState);

  const updateUser = (usuario) => {
    setDataUser(usuario);
    // setDataUser({ ...dataUser, user: usuario, isLoggedChat: true });
  };
  return (
    <AuthContext.Provider
      value={{
        dataUser,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
