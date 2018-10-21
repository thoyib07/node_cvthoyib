var express = require("express");
var app     = express();
var path    = require("path");

// app.use(express.static(__dirname + '/assets'));
app.use(express.static(path.join(__dirname, '/assets')));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(8000);

console.log("Running at Port 8000");