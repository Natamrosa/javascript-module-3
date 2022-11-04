const mathOperations = require ('./calculadora');

describe("Calculator test", () => {
    test('adding 1 + 2 should retrurn 3' , () => {
        expect(mathOperations.sum(1,2)).toBe(3);
    });
})