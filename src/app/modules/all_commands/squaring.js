import Command from '../command.js';

export default class Squaring extends Command {
    constructor(calculator, value) {
        super();
        this.calculator = calculator;
        this.value = value;
    }

    execute() {
        this.calculator.squaring(this.value);
    }

    undo() {
        this.calculator.squareRoot(this.value);
    }
}