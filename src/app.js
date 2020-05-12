const WebSocket = require("ws");

const ws = new WebSocket("ws://wss.local.multicomm:8080");

ws.on("open", () => {
  console.log("ws open in mainService");
});

ws.on("message", (data) => {
  console.log(data);
});
