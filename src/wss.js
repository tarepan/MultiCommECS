const WebSocket = require("ws");

// env key
const key = "2";

// count up
let count = 0;
setInterval(() => {
  count++;
}, 1000);

// wsServer
const wss = new WebSocket.Server({
  port: 8080,
});

wss.on("connection", (ws) => {
  console.log("connection established in wssService");
  // ws send
  setInterval(() => {
    ws.send(`msg #${count} from wssService, key=${key}`);
  }, 1000);
});
