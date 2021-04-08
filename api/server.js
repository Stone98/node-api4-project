const express = require("express");

const db = require("../data/db-config.js");

const server = express();

server.use(express.json());

server.get("/api//:recipe_id");

module.exports = server;
