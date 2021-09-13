import Command from '../command.js';

export default class Exhibitor extends Command {
    constructor(calculator, value) {
        super();
        this.calculator = calculator;
        this.value = value;
    }

    execute() {
        this.calculator.exhibitor(this.value);
    }

    undo() {}
}