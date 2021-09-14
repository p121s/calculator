import Calculator from '../calculator.js';

export default class Cubing extends Calculator {
    constructor(value) {
        super();
        this.value = value;
    }

    execute() {
        return this.value ** 3;
    }

    undo() {
        try {
            if (this.value < 0) {
                throw new Error('Enter a number greater than 0');
            }
            return Math.pow(this.value, 1 / 3);
        } catch (e) {
            alert(e);
        }
    }
}
