import Command from '../command.js';

export default class MemoryMinus extends Command {
    constructor(calculator, value) {
        super();
        this.calculator = calculator;
        this.value = value;
    }

    execute() {
        this.calculator.memoryMinus(this.value);
    }

    undo() {
        this.calculator.memoryAdd(this.value);
    }
}