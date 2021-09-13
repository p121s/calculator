// eslint-disable-next-line no-undef
const calc = require('./src/app/modules/calculator.js');

// eslint-disable-next-line no-undef
test('Addition operation', () => {
    calc.additionOperation(3, 6);
    // eslint-disable-next-line no-undef
    expect(calc.tempResult).toBe(9);
});

// eslint-disable-next-line no-undef
test('Subtraction operation', () => {
    calc.subtractionOperation(19, 6);
    // eslint-disable-next-line no-undef
    expect(calc.tempResult).toBe(13);
});

// eslint-disable-next-line no-undef
test('Muliplication operation', () => {
    calc.multiplicationOperation(6, 6);
    // eslint-disable-next-line no-undef
    expect(calc.tempResult).toBe(36);
});

// eslint-disable-next-line no-undef
test('Division operation', () => {
    calc.divisionOperation(35, 5);
    // eslint-disable-next-line no-undef
    expect(calc.tempResult).toBe(7);
});

// eslint-disable-next-line no-undef
test('Squaring operation', () => {
    calc.squaring(5);
    // eslint-disable-next-line no-undef
    expect(calc.result).toBe(25);
});

// eslint-disable-next-line no-undef
test('Squaring root operation', () => {
    calc.squareRoot(144);
    // eslint-disable-next-line no-undef
    expect(calc.result).toBe(12);
});

// eslint-disable-next-line no-undef
test('Custom root operation', () => {
    calc.customRoots(4, 256);
    // eslint-disable-next-line no-undef
    expect(calc.tempResult).toBe(4);
});