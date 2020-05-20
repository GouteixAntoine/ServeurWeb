const express = require("express");
const path = require("path");
const app = express();
const port = 1337
const db = require('./db')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
});

/* Route /nice */
app.get("/nice", function(req, res) {
    res.send("Nice");
});

app.listen(port, function() {
    console.log("le serveur tourne sur le port 1337.");
})
