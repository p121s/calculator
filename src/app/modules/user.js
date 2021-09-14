export default class User {
    constructor() {
        this.calculatorValue = '0';
    }

    getValue() {
        return this.calculatorValue;
    }

    setValue(value) {
        this.calculatorValue = value;
    }
}
