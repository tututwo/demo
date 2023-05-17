// const express = require('express');
import express from "express";
import cors from "cors";
import { Server } from "socket.io";
const io = new Server(Server);

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
// allow express to parse json body in the request
app.use(express.json());

let players = {
  a: { id: "a", name: "John Doe", score: 50 },
  b: { id: "b", name: "Jane Doe", score: 45 },
}
app.get("/table", (req, res) => {
  res.send({
    players: Object.values(players),
  });
});

app.listen(5173, () => console.log("Server started on port 5173"));
io.on('connection', (socket) => {
  console.log('Connected')
})
io.emit('get this data', { players: Object.values(players)})