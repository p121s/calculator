import Command from '../command.js';

export default class Cubling extends Command {
    constructor(calculator, value) {
        super();
        this.calculator = calculator;
        this.value = value;
    }

    execute() {
        this.calculator.cubing(this.value);
    }

    undo() {
        this.calculator.cubicRoot(this.value);
    }
}