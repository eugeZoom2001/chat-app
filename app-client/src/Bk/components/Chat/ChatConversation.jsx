import { Container, Paper, IconButton, InputBase } from "@mui/material";

import React, { useEffect, useRef } from "react";

const ChatConversation = ({ currentChat, handleInputMessage }) => {
  const textRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    handleInputMessage(textRef.current.value);
    textRef.current.value = "";
  };

  useEffect(() => {
    console.log("current_chat", currentChat);

    return () => {};
  });

  return (
    <>
      <Container fixed sx={{ display: "flex", flexDirection: "column" }}>
        <Paper
          sx={{
            width: 800,
            height: 500,
            backgroundColor: "#F2F3F4",
          }}
        ></Paper>
        {/* <TextField id="input" label="Texto" variant="standard" /> */}
        <Paper
          component="form"
          onSubmit={handleSubmit}
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 800,
            marginTop: 4,
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            name="entrada"
            inputRef={textRef}
            placeholder="Escribe"
            inputProps={{ "aria-label": "Escribe" }}
          />
        </Paper>
      </Container>
    </>
  );
};

export default ChatConversation;
