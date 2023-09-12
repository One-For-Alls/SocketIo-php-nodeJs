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
app.use('assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

let messages;

app.post("/", function(req,res){
  messages = req.body.nick;
  res.status(200).send('Datos recibidos y guardados en el servidor nodeJs.');
});

io.on("connection", function (socket) {
  console.log("Alguien se ha conectado con Sockets");
  socket.emit("messages", messages);

  socket.on("new-message", function (data) {
    console.log('datos desde php: ' + data)

    io.emit("messages", data);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});