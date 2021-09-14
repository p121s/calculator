import Calculator from '../calculator.js';

export default class TenToThePowerOfX extends Calculator {
    constructor(value) {
        super();
        this.value = value;
    }

    execute() {
        return 10 ** this.value;
    }

    undo() {}
}
