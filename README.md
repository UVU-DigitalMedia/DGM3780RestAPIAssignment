# REST API Assign [![Build Status](https://travis-ci.org/landonconover/RESTAPIAssign.svg?branch=master)](https://travis-ci.org/landonconover/RESTAPIAssign)
In this assignment we will be writing a simple REST API. Both GET and POST methods will be used

#Steps
1. Fork and clone the repo. See [the last assign](https://github.com/UVU-DigitalMedia/DGM3780-Assign1) for detailed steps.
2. Complete the assigned coding tasks
3. Submit Pull Request

# Assignment
For this assignment you will be writing a simple REST API. You will need 3 API routes (URL's) 2 GET routes and 1 POST route. All the routes will return JSON formated data.

Using the express framework you will need the following routes:

###/api
A **HTTP GET** request will return any JSON formated data. Typically this would be a validation message to make sure the user is accessing the API correctly

###/api/data
A **HTTP GET** request should return a JSON object with a data property and some fake data.

A **HTTP POST** request should return a JSON object with a query property containing the data request.

An **example** for the HTTP POST request:
POST data:

````{"data" : "QueryGoesHere" }````

The API would return:

````{"query" : "QueryGoesHere"}````


#Tips
- As always, ````npm install```` :stuck_out_tongue:
- Use body-parser middleware to retrieve the post data.
- The body-parser will need to use both ````bodyParser.json()```` and ````bodyParser.urlencoded({extended: true})````
- Use ````npm start```` to start the server. This will use a command line tool called [nodemon](http://nodemon.io/). Nodemon will watch for changes in the project folder and restart the server **AUTOMATICALLY** when you save a file. :smile:
- Use ````npm test``` to run the tests.

