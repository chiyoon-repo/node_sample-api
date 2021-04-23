const express = require("express");
const app = express();

const users = require("./users/index");

// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
}));

// routing setting
app.use("/users", users);

module.exports = app;