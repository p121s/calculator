import Calculator from '../calculator.js';

export default class MemoryMinus extends Calculator {
    constructor(value) {
        super();
        this.value = value;
        this.memoryValue = this.getMemory();
    }

    execute() {
        return this.memoryValue -= this.value;
    }

    undo() {
        return this.memoryValue += this.value;
    }
}