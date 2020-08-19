//import dependencies
const express   = require('express');
const bodyparse = require('body-parser');
const cors 	    = require('cors');
const helmet    = require('helmet');
const morgan    = require('morgan');


//defining the Express app
const PORT = 3000;
const app  = express();

// Setup Mock DataBase

const ads = [
	{title:'Hello, World!'}
];

// adding Helmet for API Security
app.use(helmet());

// setting up bodyparse 
app.use(bodyparse.json());

// Enable Cors
app.use(cors());

// HTTP Log requests
app.use(morgan('combined'));

//setting up endpoint to return adds
app.get('/', (req, res) => {
	res.send(ads);
});


app.listen(PORT, () => {
	console.log('Listening on Port' + PORT);
});
