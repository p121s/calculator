import Calculator from '../calculator.js';

export default class NaturalLogarithm extends Calculator {
    constructor(value) {
        super();
        this.value = value;
    }

    execute() {
        try {
            if (this.value < 1) {
                throw new Error('Enter a number greater than 0');
            }
            return Math.log(this.value);
        } catch (e) {
            alert(e);
        }
    }

    undo() {}
}
