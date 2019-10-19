// create variables for modules we're gonna use
var express = require("express"); // webserver
var path = require("path"); // manipule directories and files from my computer
var open = require("open"); // open the browser

// create a numeric variable for the port
var port = 3000;

// create (a webserver) a variable to be my webserver calling the express function that should be inside the express module of node_modules (app=webserver)
var app = express();

// this will serve static files from the src folder, i e , reconhece todos os arquivos dentro do foldes src
app.use("/", express.static(path.join(__dirname, "../src")));

// tells the server how it should work for requests on the root path (/) of the site
// when the server receives a request http get on the root it should execute the function to set the browser response
// configura o servidor pra que quando ele receber um request get na raíz deverar retornar na resposta o que contem no arquivo index.html
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

// tells the server to listen on port 3000
app.listen(port, function(err) {
  // if error
  if (err) {
    // message error
    console.log(err);
    // if not error
  } else {
    // open the browser using the url with the open module
    open("http://localhost:" + port);
  }
});
