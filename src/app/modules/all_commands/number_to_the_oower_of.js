import Calculator from '../calculator.js';

export default class NumberToThePowerOf extends Calculator {
    constructor(firstValue, secondValue) {
        super();
        this.firstValue = firstValue;
        this.secondValue = secondValue;
    }

    execute() {
        return this.firstValue ** this.secondValue;
    }

    undo() {
        try {
            if (this.firstValue < 0) {
                throw new Error('Enter a number greater than 0');
            }
            return Math.pow(this.secondValue, 1 / this.firstValue);
        } catch (e) {
            alert(e);
        }
    }
}
