const express = require("express");
const morgan = require("morgan");
const cors=require('cors');
const movieController = require("./controllers/movieController")

const server = express();
server.use(cors())
server.use(morgan("dev")); // middleware
server.use(express.json()); // parse json in req.body

server.get("/", (req,res, next) => { // Health check API
  return res.send("Server is running.");
});

server.use('/movies', movieController)

server.listen(9000);
