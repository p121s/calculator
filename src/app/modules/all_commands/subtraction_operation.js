import Calculator from '../calculator.js';

export default class SubtractionOperation extends Calculator {
    constructor(firstValue, secondValue) {
        super();
        this.firstValue = firstValue;
        this.secondValue = secondValue;
    }

    execute() {
        return this.firstValue - this.secondValue;
    }

    undo() {
        return this.firstValue + this.secondValue;
    }
}