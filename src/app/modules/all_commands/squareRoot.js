import Command from '../command.js';

export default class SquareRoot extends Command {
    constructor(calculator, value) {
        super();
        this.calculator = calculator;
        this.value = value;
    }

    execute() {
        this.calculator.squareRoot(this.value);
    }

    undo() {
        this.calculator.squaring(this.value);
    }
}