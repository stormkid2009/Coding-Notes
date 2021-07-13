const fs = require("fs");
const path = require("../data.json");
const addHelper = require("../helpers/add");
const deleteHelper = require("../helpers/delete");

const getUser = (req, res) => {
  res.status(200).json(path);
};

const addUser = (req, res) => {
  let data = req.body;
  //we use our helper function to read and write from data.json
  addHelper("./data.json", data);
  res.status(200).send(`file updated successfully`);
};

const deleteUser = (req, res) => {
  let user = req.body;
  console.log(user.name);
  deleteHelper("./data.json", user);
  res.status(200).send(`user has been removed successfully`);
};

module.exports = { addUser, getUser, deleteUser };
