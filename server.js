const express = require('express');
const app = express();
const path = require('path');

const server = app.listen(8080, function () {
    console.log('server is running on port 8080')
});

const io = require('socket.io')(server);
let count = 0;
io.on('connection', function (socket) {
    count++;
    console.log(`Active user - ${count}`);
    socket.on('disconnect', function () {
        count--;
        console.log(`Active user - ${count}`);
    })
});


app.use('/dist', express.static("./dist"));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/orders', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/products', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});