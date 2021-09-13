import Command from '../command.js';

export default class CalculatePercentages extends Command {
    constructor(calculator, value) {
        super();
        this.calculator = calculator;
        this.value = value;
    }

    execute() {
        this.calculator.calculatePercentages(this.value);
    }

    undo() {
        
    }
}