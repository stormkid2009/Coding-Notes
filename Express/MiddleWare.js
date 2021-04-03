/* "serving static assets"
the static assets needed by your application (stylesheets, scripts, images).
  we can use middleware for it:
  >>> express.static(path), 
  where the path parameter is the absolute path of the folder containing the assets.

  middleware needs to be mounted using the method app.use(path, middlewareFunction).
  The first path argument is optional. If you don’t pass it, 
  the middleware will be executed for all requests.
  */

  //normal usage:
  app.use(express.static(__dirname + "/public"));

  //Assets at the /public route
  app.use("/public", express.static(__dirname + "/public"));