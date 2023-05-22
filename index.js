const express = require("express");

const server = express();

server.get("/", (req, res) => {
    res.send("Hello World!");
})

server.get("*", (req, res) => {
    res.send("NOT FOUND");  
})

const port = 8080;
server.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
});