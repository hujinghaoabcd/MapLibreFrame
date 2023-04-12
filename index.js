// 调用index.html
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});