import Calculator from '../calculator.js';

export default class CubicRoot extends Calculator {
    constructor(value) {
        super();
        this.value = value;
    }

    execute() {
        try{
            if(this.value < 0) {
                throw new Error("Enter a number greater than 0");
            }
            return Math.pow(this.value, 1/3);
        } catch(e) {
            alert(e);
        }
    }

    undo() {
        return this.value ** 3;
    }
}