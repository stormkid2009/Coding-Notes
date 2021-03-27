//we use the old way of import require
var express = require('express');
//declare our app
var app = express();
//In Express, routes takes the following structure: app.METHOD(PATH, HANDLER).
//METHOD is an http method in lowercase. 
//PATH is a relative path on the server (it can be a string, or even a regular expression).
//HANDLER is a function that Express calls when the route is matched. 
//Handlers take the form function(req, res) {...}, 
//where req is the request object, and res is the response object. For example, the handler
/*function(req, res) {
    res.send('Response String');
  }*/
  app.get("/",(req,res)=>{
      res.send("Hello Express")
  })

  //serving html file
  //notice the absolute path with sendFile method
  //absolutePath = __dirname + relativePath/file.ext
  app.get("/",function(req,res){
      res.sendFile(__dirname + "src/index.html")
  })

  /*the static assets needed by your application (stylesheets, scripts, images).
  we can use middleware for it:
  >>> express.static(path), 
  where the path parameter is the absolute path of the folder containing the assets.*/

  /*
  middleware needs to be mounted using the method app.use(path, middlewareFunction).
  The first path argument is optional. If you don’t pass it, 
  the middleware will be executed for all requests.
  */
  //normal usage:
  app.use(express.static(__dirname + "/public"));

  //Assets at the /public route
  app.use("/public", express.static(__dirname + "/public"));

  //creating API to get data from json file
  app.get("your-app-url/json",(req,res)=>{
      res.json({"message": "Hello json"})
  })