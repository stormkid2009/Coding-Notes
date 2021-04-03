//we use the old way of import require
var express = require('express');
//declare our app
var app = express();
//import path module from node to handle path
var path = require("path");
/*In Express, routes takes the following structure: app.METHOD(PATH, HANDLER).
METHOD is an http method in lowercase. 
PATH is a relative path on the server (it can be a string, or even a regular expression).
HANDLER is a function that Express calls when the route is matched. 
Handlers take the form function(req, res) {...}, 
where req is the request object, and res is the response object. For example, the handler
function(req, res) {
    res.send('Response String');
  }
  */

  app.get("/",(req,res)=>{
      res.send("Hello Express")
  })

  /*serving html file
  notice the absolute path with sendFile method
  absolutePath = __dirname + relativePath/file.ext
  */
  app.get("/",function(req,res){
      res.sendFile(__dirname + "src/index.html")
  })
 // or this code
  app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname + '/index.html'))
 });
  
  

  
 

