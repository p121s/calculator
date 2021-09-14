import Calculator from '../calculator.js';

export default class Squaring extends Calculator {
    constructor(value) {
        super();
        this.value = value;
    }

    execute() {
        return this.value ** 2;
    }

    undo() {
        try {
            if (this.value < 0) {
                throw new Error('Enter a number greater than 0');
            }
            return Math.pow(this.value, 1 / 2);
        } catch (e) {
            alert(e);
        }
    }
}
