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
test('Cubing operation', () => {
    calc.cubing(12);
    // eslint-disable-next-line no-undef
    expect(calc.result).toBe(1728);
});

// eslint-disable-next-line no-undef
test('Number to the power of operation', () => {
    calc.numberToThePowerOf(5, 6);
    // eslint-disable-next-line no-undef
    expect(calc.tempResult).toBe(15625);
});

// eslint-disable-next-line no-undef
test('Squaring root operation', () => {
    calc.squareRoot(144);
    // eslint-disable-next-line no-undef
    expect(calc.result).toBe(12);
});

// eslint-disable-next-line no-undef
test('Cubic root operation', () => {
    calc.cubicRoot(27);
    // eslint-disable-next-line no-undef
    expect(calc.result).toBe(3);
});

// eslint-disable-next-line no-undef
test('Custom root operation', () => {
    calc.customRoots(4, 256);
    // eslint-disable-next-line no-undef
    expect(calc.tempResult).toBe(4);
});

// eslint-disable-next-line no-undef
test('Exhibitor operation', () => {
    calc.exhibitor(8);
    // eslint-disable-next-line no-undef
    expect(calc.result).toBe(2980.9579870417283);
});


// eslint-disable-next-line no-undef
test('Natural logarithm operation', () => {
    calc.naturalLogarithm(6);
    // eslint-disable-next-line no-undef
    expect(calc.result).toBe(1.791759469228055);
});

// eslint-disable-next-line no-undef
test('Decimal logarithm operation', () => {
    calc.decimalLogarithm(14);
    // eslint-disable-next-line no-undef
    expect(calc.result).toBe(1.146128035678238);
});

// eslint-disable-next-line no-undef
test('Ten to the power of X operation', () => {
    calc.tenToThePowerOfX(14);
    // eslint-disable-next-line no-undef
    expect(calc.result).toBe(100000000000000);
});

// eslint-disable-next-line no-undef
test('Correct fraction operation', () => {
    calc.correctFraction(9);
    // eslint-disable-next-line no-undef
    expect(calc.result).toBe(0.1111111111111111);
});

// eslint-disable-next-line no-undef
test('Calculate percentages operation', () => {
    calc.calculatePercentages(26);
    // eslint-disable-next-line no-undef
    expect(calc.tempResult).toBe(0.26);
});