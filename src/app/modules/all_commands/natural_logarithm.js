import Command from '../command.js';

export default class NaturalLogarithm extends Command {
    constructor(calculator, value) {
        super();
        this.calculator = calculator;
        this.value = value;
    }

    execute() {
        this.calculator.naturalLogarithm(this.value);
    }

    undo() {}
}