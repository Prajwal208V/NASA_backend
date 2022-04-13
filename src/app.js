const express = require('express');// express is just middleware that we add on top of the built in node http server which we can use to organize our requests handler by making routes and using middleware. 
const cors = require('cors');
const morgan = require('morgan');

const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

const app = express();

app.use(cors());
app.use(morgan('combined'));//takes in a string that tells Morgan which of the predefined formats we should use for our logs. So it defaults to combined, which is the most complete one.

app.use(express.json());//express server is going to take in some JSON data so we can use using which will pass any incoming JSON.
app.use(planetsRouter);
app.use(launchesRouter);

module.exports = app;