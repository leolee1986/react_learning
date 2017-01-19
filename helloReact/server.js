var express = require("express");
var app = express();

//tell which folder we are going to serve
app.use(express.static('public'));

app.listen(3000, function(){
  console.log("Express server is up on port 3000");
});
