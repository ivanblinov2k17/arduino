const express = require('express');
const fs = require("fs");

const app = express();

app.use(express.static('front'));

app.get("/info", function(req, res, next) {
    fs.readFile("./data.json", (err, json) => {
      res.send(json);
    });
});

app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});

