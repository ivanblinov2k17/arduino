const express = require("express");
const fs = require("fs");
const WebSocket = require("ws");
var bodyParser = require("body-parser");
var peers = []; //список всех соединенных сокетов
const app = express();

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

app.use(express.static("front"));

app.get("/info", function (req, res, next) {
    fs.readFile("./data.json", (err, json) => {
        res.send(json);
    });
});

app.post("/info", function (req, res) {
    console.log(req.body);
    fs.writeFile("./data.json", JSON.stringify(req.body));
});

app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
});

const wss = new WebSocket.Server({
    port: 8080
});
wss.on('connection', function connection(ws) {
    peers.push(ws);
    ws.on('message', function incoming(message) {
        peers.forEach(function (webs) {
            webs.send(message);
            console.log(peers);
        });
    });

    ws.send('something');
});