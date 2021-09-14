import Calculator from '../calculator.js';

export default class AdditionCommand extends Calculator {
    constructor(firstValue, secondValue) {
        super();
        this.firstValue = firstValue;
        this.secondValue = secondValue;
    }

    execute() {
        return this.firstValue + this.secondValue;
    }

    undo() {
        return this.getTempResult - this.firstValue;
    }
}
