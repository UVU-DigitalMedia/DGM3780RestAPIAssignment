var express = require('express');
var app = express();
var port = 8000;

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// write the API here

app.get('/api', function (req, res) {
    console.log('getting')
    res.json({data:"Welcome"});
})

app.get('/api/data', function (req, res) {
    console.log('getting')
    res.json({data:"Here is some data"});
})

app.post('/api/data', function (req, res) {
    console.log('Posting');
    console.log(req.body.data);
    var query = req.body.data;

    res.json({query:query});
})

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
