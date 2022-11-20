import {
  Card,
  Button,
  Badge,
  ListItem,
  List,
  ListItemText,
  Stack,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const ChatItem = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    //console.log("Nuevo Channel", e.target.innerText);
    e.target.innerText !== props.channel &&
      props.handleChangeChannel(e.target.innerText);
  };

  return (
    <Container sx={{ display: "flex", flexDirection: "row" }}>
      <ListItem
        onClick={(e) => handleClick(e)}
        sx={{ cursor: "pointer", mr: "2px" }}
      >
        <ListItemText primary={props.user} />
        <Badge color="error" badgeContent={props.cantMsg} sx={{ ml: "4px" }} />
      </ListItem>
    </Container>
  );
};

const ChatUsers = ({ users, handleChangeChannel, channel, filter }) => {
  ///

  const filteredUsers = (users, filter) =>
    filter.length > 0
      ? users.filter((u) =>
          u.nickname.toLowerCase().includes(filter.toLowerCase())
        )
      : [...users];

  return (
    <>
      <Container
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          margintop: "4px",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            margintop: "2px",
            textAlign: "center",
          }}
        ></Card>
        <Container
          fixed
          sx={{ display: "flex", flexDirection: "column", marginTop: "4px" }}
        >
          <Card
            sx={{
              width: 300,
              height: 400,
              backgroundColor: "#FEF5E7",
            }}
          >
            <List>
              {filteredUsers(users, filter).map((user) => {
                return (
                  <ChatItem
                    key={user.nickname}
                    user={user.nickname}
                    cantMsg={user.cantMsg}
                    channel={channel}
                    handleChangeChannel={handleChangeChannel}
                  />
                );
              })}
            </List>
          </Card>
        </Container>
        <Button sx={{ mt: "10px" }} color="error" variant="contained">
          Logout
        </Button>
      </Container>
    </>
  );
};

export default ChatUsers;
