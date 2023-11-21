const Car = require('./car');



// Test away!
describe ('car class', () => {
    let prius
    beforeEach(() => {
        prius = new Car('Toyota', 'Prius')
    })
    test('car exists', () => {
        expect(Car).toBeDefined();
        expect(Car).toBeInstanceOf(Function)
    })
    test('has model and make', () => {
        expect(prius).toHaveProperty('make')
        expect(prius).toHaveProperty('model')
        expect(prius).toHaveProperty('miles')
        expect(prius).toMatchObject({make: 'Toyota', model: 'Prius'})
        
    })
    test('starts with the odometer at zero', () => {
        expect(prius.miles).toBe(0)
    })
    test('car have a drive method', () => {
        expect(prius.drive).toBeDefined();
        expect(prius.drive).toBe
    })
    test('drive method takes distance and adds to odometer', () => {
        prius.drive(10)
        expect(prius.miles).toBe(10)
        prius.drive(50)
        expect(prius.miles).toBe(60)
    })
    test('driveAsync method takes distance and adds to odometer', async () => {
        await prius.driveAsync(10)
        expect(prius.miles).toBe(10)
        await prius.driveAsync(50)
        expect(prius.miles).toBe(60)
    })
})


