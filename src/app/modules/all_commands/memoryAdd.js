import Command from '../command.js';

export default class MemoryAdd extends Command {
    constructor(calculator, value) {
        super();
        this.calculator = calculator;
        this.value = value;
    }

    execute() {
        this.calculator.memoryAdd(this.value);
    }

    undo() {
        this.calculator.memoryMinus(this.value);
    }
}