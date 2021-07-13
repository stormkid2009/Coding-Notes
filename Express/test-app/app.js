const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

//setup our middleware
//serve static files in certain folder like public in this case
app.use(express.static('./public'))
//parse the form data in case we use a form
app.use(express.urlencoded({extended:false}))
//to parse the body
app.use(express.json());
app.use(cors());
//setup our devs router
const usersRouter = require("./routes/users");
app.use("/users", usersRouter);


app.listen(port, () => {
  console.log(`Server is Up at port :${port}`);
});
