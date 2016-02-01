var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 8000;

// write the API here
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/api', function(req, res) {
  res.json({'Hello':'World'});
});

app.get('/api/data', function(req, res) {
  res.json({'data':'QueryGoesHere'});
});

app.post('/api/data', function(req, res) {
  res.json({'query':req.body.data});
});

//////////////////////////////////////////
///       No need to edit below :)     ///
//////////////////////////////////////////

//export app for the tests
module.exports = app;

//spin up our app
app.listen(port, function(err){

    //check to see if there is an err
    if(err){
        //if there is, log it
        console.log(err);
    }

    //otherwise tell us that it is running
    console.log('Magic is happening on port ' + port);

});
