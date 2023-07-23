import { Server } from "socket.io";

const io = new Server(9000, {
  cors: true,
  origins: ["http://127.0.0.1:5173"],
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
