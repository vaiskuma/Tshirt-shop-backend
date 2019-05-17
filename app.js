const express = require('express');
const app = express();


const tshirts = require('./db/db');

var cors = require('cors')
var port = process.env.PORT || 8080;

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);



// Setup the server
const server = require('http').createServer(app);
server.listen(port, () => {
    console.log("Server running on port", server.address().port);
    console.log(tshirts)
   
});





app.get('/api/tshirts', (req, res) => {
    res.writeHead(200, {'Content-Type':'application/json'})
    res.end(JSON.stringify(tshirts))
    // res.status(200).send({
    //   // success: 'true',
    //   // message: 'tshirts retrieved successfully',
    //  something: tshirts.something
     
     
    // })
    // console.log(thirts.something)
  });

