const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("API served by express"));

module.exports = app;