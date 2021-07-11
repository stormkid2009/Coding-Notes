const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

//setup our middleware
app.use(express.json());
app.use(cors());
//setup our devs router
const devsRouter = require("./routes/devs");
app.use("/devs", devsRouter);


app.listen(port, () => {
  console.log(`Server is Up at port :${port}`);
});
