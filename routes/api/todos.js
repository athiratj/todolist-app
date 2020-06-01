const express = require('express');
const router = express.Router();

//todo model
const Todo = require('../../models/Todo');

router.get('/', (req, res) => {
    Todo.find()
        .sort({ date: -1 })
        .then(todos => res.json(items));
});

module.exports = router;