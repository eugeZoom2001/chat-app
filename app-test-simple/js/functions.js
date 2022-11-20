//***** USERS */

const initUsers = (users, usersServer, myNick) => {
  usersServer.forEach((u) => {
    if (u.nickname !== myNick) {
      users[u.nickname.trim()] = {
        socketId: u.socketId,
        cantMsg: 0,
        chats: [],
      };
    }
  });
};

const addUserDOM = (user, cantMsg = 0) => {
  const usersList = $("#onlineUsers");
  let classSpan = "Cbadge badge bg-danger rounded-pill";
  if (cantMsg < 1) {
    classSpan = "Cbadge d-none";
  }
  usersList.append(`<li class="Lusers list-group-item d-flex justify-content-between align-items-start">
       <div class="ms-2 me-auto">
         <div class="Celem fw-bold"> ${user.nickname}</div>
       
         </div>
        <span class="${classSpan}">${cantMsg}</span>
     </li>`);
};
const addUsersDOM = (users) => {
  removeUsersDOM();
  for (let u in users) {
    addUserDOM({ nickname: u }, users[u].cantMsg);
  }
};

const addUser = (users, user) => {
  users[user.nickname.trim()] = {
    socketId: user.socketId,
    cantMsg: 0,
    chats: [],
  };
  //console.log("user added", users);
};

const removeUsersDOM = () => {
  const list = document.getElementById("onlineUsers");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
};

/**** Messages */
const removeMessagesDOM = () => {
  const list = document.getElementById("idChat");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
};

const addPMessage = (users, data) => {
  let { sender, to, msg, time, myNick } = data,
    target;
  if (myNick === sender.trim()) {
    target = to.trim();
  } else {
    target = sender.trim();
  }
  if (target in users) {
    users[target].chats.push({ sender, msg, time });
  } else {
    console.log("addPMessage :el usuario " + sender + "no existe");
  }
};

const addPMessageDOM = (channel, data) => {
  const { msg, time, sender, myNick } = data;
  const chatList = $("#idChat");
  let clase =
    "text-align: right;color:black;font-size: 12px;font-style: italic";

  if (sender !== myNick) {
    clase = "text-align: left;color:red;font-size: 12px;font-style: italic";
  }
  chatList.append(`<li class="list-group-item">
    <div style="${clase}">
      <h6>${msg}</h6>
      <span >${time}</span>
    </div>
  </li>`);
};

const getMessagesFromChannel = (nick, users, channel) => {
  let pChats = users[channel].chats;
  users[channel].cantMsg = 0;
  pChats.forEach((chat) => {
    let data = chat;
    data.myNick = nick;
    addPMessageDOM(channel, data);
  });
};

// Global

const addGlobalMessage = (globalChat, data) => {
  const { msg, time, from } = data;
  globalChat.chat.push({ from, msg, time });
};

const addGlobalMessageDOM = (chatDOM, data) => {
  const { msg, time, from, myNick } = data;
  const chatList = $("#idChat");
  let clase =
    "text-align: right;color:black;font-size: 12px;font-style: italic";

  if (from !== myNick) {
    clase = "text-align: left;color:red;font-size: 12px;font-style: italic";
  }
  chatList.append(`<li class="list-group-item">
    <div style="${clase}">
      <h6>${from} : ${msg}</h6>
      <span >${time}</span>
    </div>
  </li>`);
};

const putGlobalMessagesDOM = (chatDOM, nick, globalChat) => {
  globalChat.cantMsg = 0;
  globalChat.chat.forEach((msg) => {
    const data = {
      msg: msg.msg,
      from: msg.from,
      time: msg.time,
      myNick: nick,
    };
    addGlobalMessageDOM(chatDOM, data);
  });
};
