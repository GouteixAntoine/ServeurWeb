const express = require("express");
const path = require("path");
const app = express();
const port = 9000
const db = require('./db')
const redis = require('./redis')
const http = require('http').createServer(app);
const  io = require('socket.io')(http, {
    origins:["127.0.0.1:3000"],
});
const cors = require("cors")

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/static', express.static(__dirname + '/public'));

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
});

/* Route /nice */
app.get("/nice", function(req, res) {
    res.send("Nice");
});

app.get("/api/cars", (req, res) => {
    res.json({username: "Jack"});
});

app.get("/socket.io", (req, res) => {
    console.log(123)


    io.on("connection", (socket) => {
        console.log('a user connected')
        console.log('33333')
        socket.emit('monEvent', data);
    })

    res.send('lol')
})



app.listen(port, function() {
    console.log("le serveur tourne sur le port 9000.");
})
