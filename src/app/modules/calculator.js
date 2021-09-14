export default class Calculator {

    constructor(){
        this.result = 0;
        this.memory = 0;
        this.tempResult = 6;
    }

    execute(){}
    undo(){}


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