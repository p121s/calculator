import Calculator from '../calculator.js';

export default class MemoryAdd extends Calculator {
    constructor(value) {
        super();
        this.value = value;
    }

    execute() {
        return this.value;
    }

    undo() {}
}
