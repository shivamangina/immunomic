const { createRequest } = require("./externalAdapter.js");
const process = require("process");
const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.EA_PORT || 8080;
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World! Server is running");
});

app.post("/", createRequest);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

process.on("SIGINT", () => {
  console.info("\nShutting down server...");
  process.exit(0);
});
