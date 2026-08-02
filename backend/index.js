const express = require("express");
const cors = require("cors");


const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());


let tasks = [  { id: 1, title: "Study Java", completed: false },    { id: 2, title: "Build Task Manager", completed: true }];


app.get("/", (req, res) => {  
    res.send("Task Manager Backend is running!");
});


app.get("/tasks", (req, res) => {  
    res.json(tasks);
});


app.post("/tasks", (req, res) => {  
    const { title } = req.body;


      
    if (!title) {     return res.status(400).json({ message: "Title is required" });   }


      
    const newTask = {     id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,     title: title,     completed: false   };


      
    tasks.push(newTask);  
    res.status(201).json(newTask);
});


app.put("/tasks/:id", (req, res) => {  
    const id = parseInt(req.params.id);  
    const { title, completed } = req.body;


      
    const task = tasks.find(t => t.id === id);


      
    if (!task) {     return res.status(404).json({ message: "Task not found" });   }


      
    task.title = title;  
    task.completed = completed;


      
    res.json(task);
});


app.delete("/tasks/:id", (req, res) => {  
    const id = parseInt(req.params.id);


      
    const taskExists = tasks.some(t => t.id === id);


      
    if (!taskExists) {     return res.status(404).json({ message: "Task not found" });   }


      
    tasks = tasks.filter(t => t.id !== id);


      
    res.json({ message: "Task deleted successfully" });
});


app.listen(PORT, () => {  
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});