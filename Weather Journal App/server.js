// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
function listening() {
	// console.log(server);
	console.log(`running on localhost: ${port}`);
};


// GET route
app.get('/get', sendData);

function sendData(req, res) {
	res.send(projectData);

};

// POST route
app.post('/allD', reciveData);

//recive Data from api  in the endpoint 
function reciveData(req, res) {
	projectData = { temp: req.body.temp, date: req.body.date, feel: req.body.feel }
	res.send(projectData);
	console.log(projectData);
};
