const express = require("express");
const mongoose = require("mongoose");
const expressGraphQl = require("express-graphql");
const cors = require("cors");

const app = express();

if (process.env.NODE_ENV !== "production") app.use(cors());

app.use("/graphql", expressGraphQl({
  schema: {},
  graphiql: true
}));

module.exports = app;