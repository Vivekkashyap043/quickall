import express  from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from "./database/db.js";
import Route from './routes/route.js';
//import path from 'path';
const app = express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));  
app.use('/',Route);
Connection();

const PORT = 7000;

const server = app.listen(PORT,() => console.log(`Server is running successfully on Port ${PORT}`));

//******************************Socket.io**************************************//

import { Server } from "socket.io";

const io = new Server(server, {
    pingTimeout: 60000,
    cors: {
        origin : 'https://quickall.onrender.com',
    }
});

let users = [];

const addUser = (userData, socketId) => {
    !users.some(user => user.sub === userData.sub) && users.push({...userData, socketId });
}

const getUser = (userId) => {
    return users.find(user => user.sub === userId);
}

io.on('connection', (socket) => {
    console.log('users connected');

    socket.on("addUsers", userData => {
        addUser(userData, socket.id);
        io.emit("getUsers", users);
    })

    socket.on('sendMessage', data => {
        const user = getUser(data.receiverId);
        io.emit('getMessage',data);
    })

})
//******************************development**************************************//

/*const __dirname = path.resolve();


  app.use(express.static(path.join(__dirname, "./client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "./client/build/index.html"))
  );*/