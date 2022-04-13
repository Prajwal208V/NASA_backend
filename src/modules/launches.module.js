const launches = new Map();

let latestFlightNumber = 100;
const launch = {
    flightNumber: 100, //identy of this flight
    mission: 'kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target:'kepler-442 b',
    customers: ['ISRO', 'NASA', 'ZTM'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(latestFlightNumber,
        Object.assign(launch, {
            flightNumber: latestFlightNumber,
            customers: ['ISRO', 'NASA', 'Zero to Mastery'],
            upcoming: true,
            success: true,
        }));
}

function exsistLaunchWithId(launchId){
   return launches.has(launchId);
}

function abortLaunchById(launchId){
   const aborted= launches.get(launchId);
   aborted.upcoming=false;
   aborted.success=false;

   return aborted;
}
// console.log(launches);

module.exports = {
    launches,
    addNewLaunch,
    exsistLaunchWithId,
    abortLaunchById,
}