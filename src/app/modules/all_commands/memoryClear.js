import Command from '../command.js';

export default class MemoryClear extends Command {
    constructor(calculator) {
        super();
        this.calculator = calculator;
    }

    execute() {
        this.calculator.memoryClear();
    }

    undo() {
        this.calculator.memoryMinus(this.value);
    }
}