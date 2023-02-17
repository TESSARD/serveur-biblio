var express = require("express")//recupération
var server = express() //lancement
var morgan = require("morgan") //morgan HTTP request logger middleware for node.js
var router = require("./router") //morgan HTTP request logger middleware for node.js

server.use(express.static("public")) //indiquer le dossier public , libre d'accès
server.use(morgan("dev"))
server.use("/", router)

server.listen(3000) //écoute sur port


