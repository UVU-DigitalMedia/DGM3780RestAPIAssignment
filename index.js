var express = require('express');
var app = express();
var port = 8000;

// write the API here
var bodyParser = require('body-Parser');



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/api', function(req, res){
	res.json({ message: 'Halleluia'});
});


app.get('/api/data', function(req, res){
	res.json( {data: 'ThisIsTheQuery'});
})
	
app.post('/api/data', function(req, res){
		 
		res.json( {query : "QueryGoesHere"})
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
