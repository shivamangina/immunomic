import { gcpservice, sendPayout, getPayout } from "./externalAdapder.js";
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import http from "http";

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.post("/", function (req, res) {
  gcpservice(req, res);
});

app.post("/send", function (req, res) {
  const payload = req.body;
  try {
    const p = sendPayout(payload);
    res.json(p);
  } catch (error) {
    res.json(error);
  }
});

app.post("/get", function (req, res) {
  const payload = req.body;
  console.log(payload);
  try {
    const p = getPayout(payload);
    res.json(p);
  } catch (error) {
    res.json(error);
  }
});

app.get("/", function (req, res) {
  res.send("hi");
});

const server = http.Server(app);

server.listen(process.env.EA_PORT, () => {
  console.log(
    "App is running at PORT %d in %s mode",
    process.env.EA_PORT,
    app.get("env")
  );
});

process.on("SIGINT", function () {
  process.exit();
});
