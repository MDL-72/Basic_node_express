var express = require('express');
var app = express();


console.log("Hello World")


// asdfsdfsdf

app.use((req, res, next) => {
  let method = req.method;
  let path = req.path;
  let ip = req.ip;

  console.log(method + " " +path + " - " +ip);
  next();
});




//getting html from the dir
app.get("/", function(req, res) {
res.sendFile(__dirname + "/views/index.html");
});

//getting the css style from the dir
app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));



//Serving JSON on specific route
app.get("/json", function(req, res) {
  res.json(
    {"message": "Hello json"}
    );
});

// 





















 module.exports = app;
