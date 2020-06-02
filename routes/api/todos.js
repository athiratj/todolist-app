const express = require("express");
const router = express.Router();

//todo model
const Todo = require("../../models/Todo");

//Get all tasks
router.get("/", (req, res) => {
    Todo.find()
        .sort({ date: -1 })
        .then(todos => res.json(todos));
});

//create a task
router.post("/", (req, res) => {
  const newTodo = new Todo({
    name: req.body.name
  });
    newTodo.save().then(todo => res.json(todo));
});

//delete a task 
router.delete("/:id", (req, res) => {
    Todo.findById(req.params.id)
        .then(todo => todo.remove()
        .then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
    });
      

  
module.exports = router;
