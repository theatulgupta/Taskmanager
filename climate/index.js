const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){

    var city = req.body.ct;
    var Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=db7417900c7b02f847c00d8c7aabde40`;
    
    request(Url, function(error,response,body){
        var data = JSON.parse(body);
        var weather = (data.main.temp-275.15).toFixed(0);
        res.send("<h1>Current temperature of "+city+" is : "+weather+" &degC</h1>");
    })
});

app.listen(5000,function(){
    console.log("Server is running at port 5000");
});