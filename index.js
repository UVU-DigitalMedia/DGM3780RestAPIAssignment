var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 8000;
// write the API here

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/api', function(req, res){
  console.log('getting');
  res.send({thoughts: 'My API here!'});
});

app.get('/api/data', function(req, res){
  console.log("can you see?");
  res.json({data: 'this is fake data'});
});

app.post('/api/data', function(req, res){
  console.log(req.body);
  console.log(req.body.data);

  var query = (req.body.data);

  res.json({query:query});
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
