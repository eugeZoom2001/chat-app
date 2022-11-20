import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { fechaHora } from "../utils/fechas";
export const useSocket = (socket) => {
  const { dataUser } = useContext(AuthContext);

  useEffect(() => {
    socket.on("connect", () => {
      //console.log("conectado")
    });

    // socket.on("private-msg", (data) => {
    //   const { chatUsers, channel, user } = dataUser;
    //   data.time = fechaHora(new Date().toISOString());
    //   data.myNick = user;
    //   const datos = { ...data };
    //   datos.time = data.time;
    //   console.log("private-msg users", chatUsers);
    //   console.log("private-msg data", datos);

    //   if (data.sender.trim() === channel) {
    //     chatUsers[data.sender].chats.push(data);
    //   } else {
    //     if (data.sender.trim() in chatUsers) {
    //       //chatUsers[data.sender].cantMsg++;
    //     }
    //   }
    //   console.log(chatUsers);
    // });

    socket.on("disconnect", () => {
      //setIsConnected(false);
    });

    return () => {
      // console.log("salgo de ChatPage");
      socket.off("connect");
      socket.off("disconnect");
    };
  }, [socket]);
  return { dataUser };
};
