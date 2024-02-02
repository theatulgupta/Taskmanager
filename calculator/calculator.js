const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname + "/bmi.html");
});

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/bmiCalculator",function(req,res){
   var weight = Number(req.body.num1);
   var height = Number(req.body.num2);
   var result = weight/(height*height);
   res.send("the calculated BMI is : " + result);
});

app.post("/",function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("the calculated result is : " + result);
 });

app.listen(5000,function(){
    console.log("server started at PORT 5000");
});