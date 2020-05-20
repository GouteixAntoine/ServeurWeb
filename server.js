var express = require("express");
var app = express();
var port = 1337


/* Route */
app.get("/", function(req, res) {
    res.sendFile(__dirname+'/index.html')
});

/* Route /nice */
app.get("/nice", function(req, res) {
    res.send("Nice");
});

app.listen(port, function() {
    console.log("Express Node.js le serveur tourne sur le port 1337.");
})
