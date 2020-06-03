const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const todos = require('./routes/api/todos');

const app = express();
//bodyparser middleware
app.use(bodyParser.json());

//connecting mongodb

mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongoose connected'))
    .catch(err => console.log(err));

//use routes
app.use('/api/todos', todos);   

//serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname +"/client/build/index.html"));
    });
}

    
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));

