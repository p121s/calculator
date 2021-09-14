import Calculator from '../calculator.js';

export default class DecimalLogarithm extends Calculator {
    constructor(calculator, value) {
        super();
        this.calculator = calculator;
        this.value = value;
    }

    execute() {
        try{
            if(this.value < 1) {
                throw new Error("Enter a number greater than 0");
            }
            return Math.log10(this.value);
        } catch(e) {
            alert(e);
        }
    }

    undo() {}
}