import { createRequest } from "./externalAdapter.js";
import process from "process";

import express from "express";

import bodyParser from "body-parser";

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
