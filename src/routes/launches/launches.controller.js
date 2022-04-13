const { launches, addNewLaunch, exsistLaunchWithId, abortLaunchById } = require('../../modules/launches.module');

function getAllLaunches(req, res) {
    return res.status(200).json(Array.from(launches.values()));
    // console.log(launches);
}

function httpAddNewLanch(req, res) {
    const launch = req.body;
    launch.launchDate = new Date(launch.launchDate);
    addNewLaunch(launch);
    return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
    const launchId = Number(req.params.id);

    //if launch doesn't exist
    if (!exsistLaunchWithId(launchId)) {
        return res.status(404).json({
            error: "Launch not found",
        })
    }
    //if launch does exist
    const aborted=abortLaunchById(launchId);
    return res.status(200).json(aborted);
}

module.exports = { getAllLaunches, httpAddNewLanch, httpAbortLaunch };