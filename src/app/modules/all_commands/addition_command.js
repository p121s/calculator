import Command from '../command.js';

export default class AdditionCommand extends Command {
    constructor(calculator, firstValue, secondValue) {
        super();
        this.calculator = calculator;
        this.firstValue = firstValue;
        this.secondValue = secondValue;
    }

    execute() {
        this.calculator.additionOperation(this.firstValue, this.secondValue);
    }

    undo() {
        this.calculator.subtractionOperation(this.firstValue, this.secondValue);
    }
}