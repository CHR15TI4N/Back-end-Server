const express = require("express");

const server = express();
server.use(express.json())

let tasks = [
    {
        id: 1,
        name: "Comprar leite",
        description: "Ir no mercado da esquina e comprar leite",
        isDone: false
    }
]

server.get("/tasks", (req, res) => {
    res.json({
        tasks
    })
})

server.get("/tasks/:id", (req, res) => {
    const id = Number(req.params.id)
    const task = tasks.find((task) => {
        return task.id === id;
    })
    res.json({
        task
    })
})

server.post("/tasks", (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        name: req.body.name,
        description: req.body.description,
        isDone: req.body.isDone
    }
    tasks.push(newTask)
    res.json({
        task: newTask
    })
})

server.put("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find((task) => {
        return task.id === id;
    })
    if(!task){
        return res.status(404).send("ERROR 404")
    }
    task.name = req.body.name;
    task.description = req.body.description;
    task.isDone = req.body.isDone;
    res.json({
        task
    })
})

server.delete("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    tasks = tasks.filter((task) => {
        return task.id !== id
    })
    res.status(204).send("O item foi excluído!")
})



const port = 3030;
server.listen(port, () => {
    console.log(`Server is running on port ${port}!`)
});