const express = require('express');
const mongoose = require('mongoose');
const app = express();

const usersRoute = require('./routes/users');
app.use('/users', usersRoute);

app.get('/', (req, res) => {
    res.send("Instagram servers are online!");
});

mongoose.connect("mongodb+srv://user:Password123@cluster0-qgb13.mongodb.net/test?retryWrites=true&w=majority", () => console.log("Connected to db!"));

module.exports = app;
app.listen(3000, () => console.log("Server is up!"));