function speedLimit(speed) {
    const speedLimit = 70;
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        const points = Math.floor((speed - speedLimit) / 5);
        console.log(`Points: ${points}`);
        if (points > 12) {
            console.log("License suspended");
        }
    }
}