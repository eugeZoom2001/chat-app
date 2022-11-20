import React, { useContext } from "react";
import Login from "./Login";
import Navigation from "./Navigation";
import { AuthContext } from "../context/AuthContext";

const Main = () => {
  const { dataUser } = useContext(AuthContext);

  return (
    <>
      {dataUser.isLogged ? (
        <>
          <Navigation />
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Main;
