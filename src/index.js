import { createRequest } from "./externalAdapder.js";
import process from "process";

import express from "express";

import bodyParser from "body-parser";

const app = express();
const port = process.env.EA_PORT || 8080;

app.use(bodyParser.json());

app.post("/", (req, res) => {
  createRequest(req.body, (status, result) => {
    res.status(status).json(result);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

process.on("SIGINT", () => {
  console.info("Interrupted. Cancelling");
  exit(0);
});
