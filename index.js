const {server} = require("./server");

const port = 8080;
server.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
});








/*server.get("/", (req, res) => {
    res.send("Hello World!");
})

server.get("/user", (req, res) => {
    res.send("User")
})

server.get("*", (req, res) => {
    res.send("NOT FOUND");  
})*/