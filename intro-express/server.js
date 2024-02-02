const express = require('express');
const app = express();

app.get("/",function(request , response){
    response.send("<h1>Ankit Pawar</h1>");
});

app.get("/contact",function(req,res){
    res.send("contact me at : ankit.pawar@google.com");
});

app.get("/about",function(req,res){
    res.send("<h2>I am Ankit Pawar and I am the student of Jabalpur Engineering college Jabalpur");
});

app.listen(3000,function(){
    console.log("server started at port 3000")
});