const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const todos = require('./routes/api/todos');

const app = express();
//bodyparser middleware
app.use(bodyParser.json());

//connecting mongodb
const uri = '';
mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongoose connected'))
    .catch(err => console.log(err));

//use routes
app.use('/api/todos', todos);   

    
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));

