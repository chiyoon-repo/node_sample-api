const express = require("express");
const app = express();

const users = require("./users/index");

// routing setting
app.use("/users", users);

module.exports = app;