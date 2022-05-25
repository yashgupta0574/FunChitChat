const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
app.get("/", (req, res) => res.send("API IS RUNNING!!"));

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
