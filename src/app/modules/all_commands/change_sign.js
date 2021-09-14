import Calculator from '../calculator.js';

export default class ChangeSign extends Calculator {
    constructor(value) {
        super();
        this.value = value;
    }

    execute() {
        if(this.value < 0) {
            return Math.abs(this.value);
        } else {
            return this.value * -1;
        }
    }

    undo() {}
}