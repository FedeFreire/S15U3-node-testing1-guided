// Build a Car class!
module.exports = class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.miles = 0;
    }
    drive(distance) {
        this.miles += distance;
    }
    async driveAsync(distance) {
        this.miles += distance;
        return this.miles;
    }
}