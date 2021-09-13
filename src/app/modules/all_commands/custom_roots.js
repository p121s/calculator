import Command from '../command.js';

export default class CustomRoots extends Command {
    constructor(calculator, firstValue, secondValue) {
        super();
        this.calculator = calculator;
        this.firstValue = firstValue;
        this.secondValue = secondValue;
    }

    execute() {
        this.calculator.customRoots(this.firstValue, this.secondValue);
    }

    undo() {
        this.calculator.numberToThePowerOf(this.firstValue, this.secondValue);
    }
}