import Command from '../command.js';

export default class DecimalLogarithm extends Command {
    constructor(calculator, value) {
        super();
        this.calculator = calculator;
        this.value = value;
    }

    execute() {
        this.calculator.decimalLogarithm(this.value);
    }

    undo() {}
}