const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express(); 

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    request("https://api.openweathermap.org/data/2.5/weather?q=Jabalpur&appid=db7417900c7b02f847c00d8c7aabde40", function(error, response, body){
        var data = JSON.parse(body);
        console.log(data.main.temp);
    });
});

app.listen(4000, function(){
    console.log("Server started at port 4000 ");
});