console.log('server start les go')

var express = require('express'); 

var app = express()

var server = app.listen(3000, listening);

function listening(){
    console.log('listening now.....')
}

app.use(express.static('website'))