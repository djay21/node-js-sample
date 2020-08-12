var express = require('express');
const fs = require('fs')

// Constants
var DEFAULT_PORT = 8000;
var PORT = process.env.PORT || DEFAULT_PORT;

// App
var app = express();
app.get('/', function (req, res) {


console.log("hello world")
    res.sendFile('test.html', {root: __dirname })
            });
            
 fs.writeFileSync('dheeraj/sync.txt', 'anni');

let data = "This is a file containing a collection"
           + " of programming languages.\n"
 + "1. C\n2. C++\n3. Python"; 
  
fs.writeFileSync("dheeraj/programming.txt", data); 
console.log("File written sxxduccessfully\n");
// appmhjs

//----------------------------------------------------------------------------------------------------------
app.listen(PORT)
console.log('Running on http://localhost:' + PORT);
