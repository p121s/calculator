export default class Calculator {
    constructor(){
        this.result = 0;
        this.memory = 0;
        this.tempResult = 0;
    }

    allClean() {
        this.result = 0;
    }

    memoryAdd(value) {
        this.memory += value;
    }

    memoryMinus(value) {
        this.memory -= value;
    }

    memoryClear() {
        this.memory = 0;
    }

    changeSign(value) {
        if(value < 0) {
            this.setTempResult = Math.abs(value);
        } else {
            this.tempResult = value * -1;
        }
    }

    calculatePercentages(value) {
        this.tempResult = value / 100;
    }

    additionOperation(firstValue, secondValue) {
        this.tempResult = firstValue + secondValue;
    }

    subtractionOperation(firstValue, secondValue) {
        this.tempResult = firstValue - secondValue;
    }

    multiplicationOperation(firstValue, secondValue) {
        this.tempResult = firstValue * secondValue;
    }

    divisionOperation(firstValue, secondValue) {
        try{
            if (secondValue === 0) {
                throw new Error("Divide by zero is forbidden");
            }
            this.tempResult = firstValue / secondValue;
        } catch(e) {
            alert(e);
        }
    }

    squaring(value) {
        this.result = value ** 2;
    }

    cubing(value) {
        this.result = value ** 3;
    }

    numberToThePowerOf(firstValue, secondValue) {
        this.tempResult = firstValue ** secondValue;
    }

    squareRoot(value) {
        try {
            if(value < 0) {
                throw new Error("Enter a number greater than 0");
            }
            this.result = Math.pow(value, 1/2);
        } catch(e) {
            alert(e);
        }
        
    }

    cubicRoot(value) {
        try{
            if(value < 0) {
                throw new Error("Enter a number greater than 0");
            }
            this.result = Math.pow(value, 1/3);
        } catch(e) {
            alert(e);
        }
        
    }

    customRoots(firstValue, secondValue) {
        try{
            if(firstValue < 0) {
                throw new Error("Enter a number greater than 0");
            }
            this.tempResult = Math.pow(secondValue, 1 / firstValue);
        } catch(e) {
            alert(e);
        }
    }

    exhibitor(value) {
        this.result = Math.exp(value);
    } 

    naturalLogarithm(value) {
        try{
            if(value < 1) {
                throw new Error("Enter a number greater than 0");
            }
            this.result = Math.log(value);
        } catch(e) {
            alert(e);
        }
    }

    decimalLogarithm(value) {
        try{
            if(value < 1) {
                throw new Error("Enter a number greater than 0");
            }
            this.result = Math.log10(value);
        } catch(e) {
            alert(e);
        }
    }

    tenToThePowerOfX(value) {
        this.result = 10 ** value;
    }

    correctFraction(value) {
        this.result = 1 / value;
    }

    setResult (value) {
        this.result = value;
    }

    getResult () {
        return this.result;
    }

    setMemory (value) {
        this.memory = value;
    }

    getMemory () {
        return this.memory;
    }

    setTempResult (value) {
        this.tempResult = value;
    }

    getTempResult () {
        return this.tempResult;
    }

}