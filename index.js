var express = require('express');
var app = express();
var bodyParser = reequire('body-parser');
var port = 8000;

// write the API here

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.jason());

app.get('/app', function(req, res){
  res.send({'thoughts: Lando Fixed the test'});
});

app.get('/api/data', function(req, res){
  res.json({data: 'some fake data'});
});

app.post('/api/data', function(req, res){
  res.json(res.body);
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
