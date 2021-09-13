import Command from '../command.js';

export default class DivisionOperation extends Command {
    constructor(calculator, firstValue, secondValue) {
        super();
        this.calculator = calculator;
        this.firstValue = firstValue;
        this.secondValue = secondValue;
    }

    execute() {
        this.calculator.divisionOperation(this.firstValue, this.secondValue);
    }

    undo() {
        this.calculator.multiplicationOperation(this.firstValue, this.secondValue);
    }
}