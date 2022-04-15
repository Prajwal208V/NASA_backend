const launches = new Map();

let latestFlightNumber = 105;
const launch = {
    flightNumber: 100, //identy of this flight
    mission: 'kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'kepler-442 b',
    customers: ['ISRO', 'NASA', 'ZTM'],
    upcoming: true,
    success: true,
};
const launch2 = {
    flightNumber: 101, //identy of this flight
    mission: 'ISRO-NASA',
    rocket: 'Explorer ISD145',
    launchDate: new Date('December 27, 2032'),
    target: 'kepler-44 b',
    customers: ['ISRO', 'NASA', 'ZTM'],
    upcoming: true,
    success: true,
};
const launch3 = {
    flightNumber: 102, //identy of this flight
    mission: 'Beta',
    rocket: 'Explorer IS125',
    launchDate: new Date('December 27, 2031'),
    target: 'kepler-442 b',
    customers: ['ISRO', 'NASA', 'Emirates'],
    upcoming: true,
    success: true,
};
const launch4 = {
    flightNumber: 103, //identy of this flight
    mission: 'kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2012'),
    target: 'kepler-442 b',
    customers: ['ISRO', 'NASA', 'ZTM'],
    upcoming: false,
    success: false,
};
const launch5 = {
    flightNumber: 104, //identy of this flight
    mission: 'kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2020'),
    target: 'kepler-442 b',
    customers: ['ISRO', 'NASA', 'ZTM', 'Emirates'],
    upcoming: false,
    success: false,
};
const launch6 = {
    flightNumber: 105, //identy of this flight
    mission: 'Alpha',
    rocket: 'Explorer ISC102',
    launchDate: new Date('December 12, 2025'),
    target: 'kepler-442 b',
    customers: ['ISRO', 'NASA', 'ZTM'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);
launches.set(launch2.flightNumber, launch2);
launches.set(launch3.flightNumber, launch3);
launches.set(launch4.flightNumber, launch4);
launches.set(launch5.flightNumber, launch5);
launches.set(launch5.flightNumber, launch6);

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

function exsistLaunchWithId(launchId) {
    return launches.has(launchId);
}

function abortLaunchById(launchId) {
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;

    return aborted;
}
// console.log(launches);

module.exports = {
    launches,
    addNewLaunch,
    exsistLaunchWithId,
    abortLaunchById,
}
