import Calculator from '../calculator.js';

export default class CorrectFraction extends Calculator {
    constructor(value) {
        super();
        this.value = value;
    }

    execute() {
        return 1 / this.value;
    }

    undo() {}
}