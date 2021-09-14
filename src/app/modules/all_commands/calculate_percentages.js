import Calculator from '../calculator.js';

export default class CalculatePercentages extends Calculator {
    constructor(value) {
        super();
        this.value = value;
    }

    execute() {
        return this.value / 100;
    }

    undo() {}
}
