var host = "127.0.0.1";
var port = "1338";
var express = require("express");
var stringHelper = require("./stringHelper");
var nodeSum = require("./nodeSum");
var app = express();

//app.use(app.router);
//app.use(express.static(__dirname));

app.get("/", function(request, response){
    response.send("Hello World!");
});

app.get("/hello/:thetext", function(request, response){
    response.send("Hello "+stringHelper.upperCase(request.params.thetext)+"!");
});

app.get("/sum/:num1/:num2", function(request, response){
    response.send("sum "+request.params.num1+"+"+request.params.num2+"="+nodeSum.sum(request.params.num1,request.params.num2)+"!");
});

app.get("/close", function(request, response){
    app.close();
});

app.listen(port,host);
console.log("Listening on port "+port);


