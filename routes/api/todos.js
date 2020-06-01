const express = require("express");
const router = express.Router();

//todo model
const Todo = require("../../models/Todo");

//Get all todos
router.get("/", (req, res) => {
  Todo.find()
    .sort({ date: -1 })
    .then((todos) => res.json(todos));
});

//create a post
router.post("/", (req, res) => {
  const newTodo = new Todo({
    name: req.body.name,
  });
    newTodo.save().then(todo => res.json(todo));
});

module.exports = router;
