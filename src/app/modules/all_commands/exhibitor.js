import Calculator from '../calculator.js';

export default class Exhibitor extends Calculator {
    constructor(value) {
        super();
        this.value = value;
    }

    execute() {
        return Math.exp(this.value);
    }

    undo() {}
}
