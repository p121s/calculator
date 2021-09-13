import Command from '../command.js';

export default class TenToThePowerOfX extends Command {
    constructor(calculator, value) {
        super();
        this.calculator = calculator;
        this.value = value;
    }

    execute() {
        this.calculator.tenToThePowerOfX(this.value);
    }

    undo() {}
}