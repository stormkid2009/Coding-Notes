//we use the old way of import require
var express = require('express');
//declare our app
var app = express();
//import path module from node to handle path
var path = require("path");
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
 // or this code
  app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname + '/index.html'))
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
 //use .env file
 /*
 .env file is a hidden file that is used to pass environment variables to your application
 we use to store data which we need to be private or hidden like :
 (API keys from external services , your database URI,configuration options)

 process.env.VAR_NAME >> variables name is always capital and we don't need quotes
 */
/*
The environment variables are accessible from the app as process.env.VAR_NAME. 
The process.env object is a global Node object, and variables are passed as strings. 
By convention, the variable names are all uppercase, with words separated by an underscore. 
The .env is a shell file, so you don’t need to wrap names or values in quotes. 
It is also important to note that there cannot be space around the equals sign 
when you are assigning values to your variables, e.g. VAR_NAME=value. 
Usually, you will put each variable definition on a separate line.

*/
app.get("/json",(req,res)=>{
    let data = {"message":"Hello Json"}
    if(process.env.MESSAGE_STYLE === 'uppercase'){
        data.message = data.message.toUpperCase();
    }
    res.json(data);
})