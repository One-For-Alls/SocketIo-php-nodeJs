import express  from "express";
import http from "http";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Server } from "socket.io";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(express.urlencoded())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

let messages;

app.post("/", function(req,res){
  messages = req.body.nick;
  
  res.status(200).send('Datos recibidos desde php');

  io.emit("messages", messages);
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});