import Command from '../command.js';

export default class ChangeSign extends Command {
    constructor(calculator, value) {
        super();
        this.calculator = calculator;
        this.value = value;
    }

    execute() {
        return this.calculator.changeSign(this.value);
    }

    undo() {}
}