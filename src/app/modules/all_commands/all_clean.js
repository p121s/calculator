import Command from '../command.js';

export default class AllClean extends Command {
    constructor(calculator) {
        super();
        this.calculator = calculator;
    }

    execute() {
        this.calculator.allClean();
    }

    undo() {}
}