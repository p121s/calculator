import Command from '../command.js';

export default class NumberToThePowerOf extends Command {
    constructor(calculator, firstValue, secondValue) {
        super();
        this.calculator = calculator;
        this.firstValue = firstValue;
        this.secondValue = secondValue;
    }

    execute() {
        this.calculator.numberToThePowerOf(this.firstValue, this.secondValue);
    }

    undo() {
        this.calculator.customRoots(this.firstValue, this.secondValue);
    }
}