const express = require("express");
const app = express();
const port = 1337

app.set('view engine', 'pug');

/* Route /nice */
app.get("/nice", function(req, res) {
    res.send("Nice");
});

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.listen(port, function() {
    console.log("Express Node.js le serveur tourne sur le port 1337.");
})
