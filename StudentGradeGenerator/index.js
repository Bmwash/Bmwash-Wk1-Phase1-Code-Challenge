const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("what is the speed of the car (in km/h): ", function(speed) {
    speed = Number(speed);

    if (isNaN(speed) || speed < 0) {
        console.log("Wrong input, enter a positive number.");
    } else {
        let speedLimit = 70;
        let DemeritPoint = 5;

        if (speed <= speedLimit) {
            console.log("Ok");
        } else {
            let demeritPoints = Math.floor((speed - speedLimit) / DemeritPoint);
            console.log("Points: " + demeritPoints);

            if (demeritPoints > 12) {
                console.log("License suspended");
            }
        }
    }

    rl.close();
});
