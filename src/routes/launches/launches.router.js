const express = require('express');
const launchesRouter = express.Router();

const { getAllLaunches, httpAddNewLanch, httpAbortLaunch } = require('./launches.controller');


launchesRouter.get('/launches', getAllLaunches);
launchesRouter.post('/launches', httpAddNewLanch);
launchesRouter.delete('/launches/:id', httpAbortLaunch);

module.exports = launchesRouter;