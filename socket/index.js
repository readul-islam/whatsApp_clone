import { Server } from "socket.io";

const io = new Server(9000, {
  cors: true,
  origins: ["https://magenta-froyo-758119.netlify.app"],
});

const users = [];

const addUser = (userData, socketId) => {
  !users.some((user) => user.id === userData.id) &&
    users.push({ ...userData, socketId });
};

const getUser = (receiverId) => {
  return users.find((user) => user.id === receiverId);
};

io.on("connection", (socket) => {
  socket.on("addUser", (userData) => {
    addUser(userData, socket.id);

    io.emit("getUsers", users);
  });

  socket.on("sendMessage", (data) => {
    const user = getUser(data.receiver_id);

    console.log(user);

    io.to(user.socketId).emit("getMessage", data);
    console.log("sended");
  });
});
