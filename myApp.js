var express = require('express');
var app = express();
require('dotenv').config()

console.log("Hello World")


// asdfsdfsdf






//getting html from the dir
app.get("/", function(req, res) {
res.sendFile(__dirname + "/views/index.html");
});

//getting the css style from the dir
app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

//Serving JSON on specific route
//app.get("/json", function(req, res) {
  //res.json(
    //{"message": process.env.MESSAGE_STYLE == "uppercase" ? "HELLO JSON": "Hello json"}
    //);
//});

//configuring .env

app.get("/json", function(req,res){

  console.log(process.env.MESSAGE_STYLE, " <= message style");
  if(process.env.MESSAGE_STYLE === "uppercase"){
    res.json({
      "message" : "HELLO JSON"
    })
  }
  else{
    res.json({
      "message" : "Hello json"
    })
  }
});



















 module.exports = app;
