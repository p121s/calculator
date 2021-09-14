import Calculator from '../calculator.js';

export default class MemoryMinus extends Calculator {
    constructor(value) {
        super();
        this.value = value;
    }

    execute() {
        return this.value;
    }

    undo() {
        return this.value;
    }
}