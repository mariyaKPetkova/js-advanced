function solve(speed, place) {
    const radar = {
        motorway(speed) {
            const limit = 130
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            }
            if (speed > limit) {
                if (speed <= limit + 20) {
                    const status = 'speeding'
                    console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);
                } else if (speed <= limit + 40) {
                    const status = 'excessive speeding'
                    console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);
                } else if (speed > limit + 40) {
                    const status = 'reckless driving'
                    console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);
                }
            }
        },
        interstate(speed) {
            const limit = 90
            let status = ''
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            }
            if (speed > limit) {
                if (speed <= limit + 20) {
                    status = 'speeding'
                } else if (speed <= limit + 40) {
                    status = 'excessive speeding'
                } else if (speed > limit + 40) {
                    status = 'reckless driving'
                }
                console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);
            }
        },
        city(speed) {
            const limit = 50;
            let status = ''
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            }
            if (speed > limit) {
                if (speed <= limit + 20) {
                    status = 'speeding'
                } else if (speed <= limit + 40) {
                    status = 'excessive speeding'
                } else if (speed > limit + 40) {
                    status = 'reckless driving'
                }
                console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);
            }
        },
        residential(speed) {
            const limit = 20;
            let status = ''
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            }
            if (speed > limit) {
                if (speed <= limit + 20) {
                    status = 'speeding'
                } else if (speed <= limit + 40) {
                    status = 'excessive speeding'
                } else if (speed > limit + 40) {
                    status = 'reckless driving'
                }
                console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);
            }
        }
    }
    radar[place](speed)
}
solve(140, 'interstate')