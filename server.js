const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("API served by express"));

const port = process.env.PORT;
app.listen(port, () => console.log("Express server is listening on port:" + port));