import React from "react";
import { createContext, useState } from "react";
export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const initState = {
    user: "julian",
    socketId: null,
    chatUsers: [],
    isLogged: false,
    channel: "global",
  };
  const [dataUserChat, setDataUserChat] = useState(initState);

  const updateUserChat = (usuario) => {
    setDataUserChat(usuario);
  };
  return (
    <ChatContext.Provider
      value={{
        dataUserChat,
        updateUserChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
