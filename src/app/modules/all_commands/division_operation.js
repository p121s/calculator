import Calculator from '../calculator.js';

export default class DivisionOperation extends Calculator {
    constructor(firstValue, secondValue) {
        super();
        this.firstValue = firstValue;
        this.secondValue = secondValue;
    }

    execute() {
        try{
            if (this.secondValue === 0) {
                throw new Error("Divide by zero is forbidden");
            }
            return this.firstValue / this.secondValue;
        } catch(e) {
            alert(e);
        }
    }

    undo() {
        return this.firstValue * this.secondValue;
    }
}