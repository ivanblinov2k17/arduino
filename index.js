const express = require('express');
const fs = require("fs");
var bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('front'));

app.get("/info", function(req, res, next) {
    fs.readFile("./data.json", (err, json) => {
      res.send(json);
    });
});

app.post("/info", function(req, res){
  console.log(req.body);

});

app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});

