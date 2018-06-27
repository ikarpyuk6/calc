var express = require('express')
var app = express();
app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/calc.html')
})

app.listen(process.env.PORT||8080);

console.log("run!");