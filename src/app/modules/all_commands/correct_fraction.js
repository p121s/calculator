import Command from '../command.js';

export default class CorrectFraction extends Command {
    constructor(calculator, value) {
        super();
        this.calculator = calculator;
        this.value = value;
    }

    execute() {
        this.calculator.correctFraction(this.value);
    }

    undo() {}
}