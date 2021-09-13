import Calculator from './src/app/modules/calculator.js';

const calc = new Calculator();


//first.test.js
test('My first test', () => {
    expect(calc.additionOperation(3, 6)).toEqual(calc.tempResult === 9);
});