const { parse } = require('csv-parse');
const { on } = require('events');
const fs = require('fs'); // file-system
const path = require('path');

const planets = [];

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
}

fs.createReadStream(path.join(__dirname, '../','../','data', 'kepler_data.csv'))
    .pipe(parse({ 
        comment: '#',
        columns: true,
    }))
    .on('data', (data) => {
        if (isHabitablePlanet(data)) {
            planets.push(data);
        }
    })
    .on('error', (err) => {
        console.log(err);
    })
    .on('end', () => {
        console.log(planets.map((planet) => {
            return planet['kepler_name'];
        }))
        console.log(`${planets.length} planets are loded`);
    });
    

    module.exports=planets;
    