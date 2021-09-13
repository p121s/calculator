import Command from '../command.js';

export default class CublingRoot extends Command {
    constructor(calculator, value) {
        super();
        this.calculator = calculator;
        this.value = value;
    }

    execute() {
        this.calculator.cubicRoot(this.value);
    }

    undo() {
        this.calculator.cubing(this.value);
    }
}