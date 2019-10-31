const express = require("express");
const fs = require("fs");
const WebSocket = require("ws");
var bodyParser = require("body-parser");

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
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    ws.send('something');
});