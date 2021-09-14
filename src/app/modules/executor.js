// eslint-disable-next-line no-undef
import Calculator from "./calculator.js";
import AdditionCommand from "./all_commands/addition_command.js";
import SubtractionOperation from "./all_commands/subtraction_operation.js";
import AllClean from "./all_commands/all_clean.js";
import MultiplicationOperation from "./all_commands/multiplication_operation.js";
import DivisionOperation from "./all_commands/division_operation.js";
import MemoryAdd from "./all_commands/memory_add.js";
import MemoryMinus from "./all_commands/memory_minus.js";
import MemoryClear from "./all_commands/memory_clear.js";
import ChangeSign from "./all_commands/change_sign.js";
import CalculatePercentages from "./all_commands/calculate_percentages.js";
import Squaring from "./all_commands/squaring.js";
import SquareRoot from "./all_commands/squareRoot.js";
import Cubing from "./all_commands/cubing.js";
import CubicRoot from "./all_commands/cubic_root.js";
import NumberToThePowerOf from "./all_commands/number_to_the_oower_of.js";
import CustomRoots from "./all_commands/custom_roots.js";
import Exhibitor from "./all_commands/exhibitor.js";
import NaturalLogarithm from "./all_commands/natural_logarithm.js";
import DecimalLogarithm from "./all_commands/ten_to_the_power_of_x.js";
import TenToThePowerOfX from "./all_commands/ten_to_the_power_of_x.js";
import CorrectFraction from "./all_commands/correct_fraction.js";

export default class Executor {
    constructor() {
        this.calculator = new Calculator();
        this.commands = [];
        this.command = null;
    }

    memoryAdd(value) {
        this.command = new MemoryAdd(value);
        this.commands.push(this.command);
        this.calculator.setMemory(this.calculator.getMemory() + this.command.execute());
    }

    memoryMinus(value) {
        this.command = new MemoryMinus(value);
        this.commands.push(this.command);
        this.calculator.setMemory(this.calculator.getMemory() - this.command.execute());
    }

    memoryClear() {
        this.command = new MemoryClear();
        this.commands.push(this.command);
        this.calculator.setMemory(this.command.execute());
    }

    changeSign(value) {
        this.command = new ChangeSign(value);
        this.commands.push(this.command);
        this.calculator.setTempResult(this.command.execute());
    }

    calculatePercentages(value) {
        this.command = new CalculatePercentages(value);
        this.commands.push(this.command);
        this.calculator.setTempResult(this.command.execute());
    }

    allClean() {
        this.command = new AllClean();
        this.commands = [];
        this.command = null;
        this.calculator.setResult(0);
    }

    additionOperation(firstValue, secondValue) {
        this.command = new AdditionCommand(firstValue, secondValue);
        this.commands.push(this.command);
        this.calculator.setTempResult(this.command.execute());
    }

    subtractionOperation(firstValue, secondValue) {
        this.command = new SubtractionOperation(firstValue, secondValue);
        this.commands.push(this.command);
        this.calculator.setTempResult(this.command.execute());
    }

    multiplicationOperation(firstValue, secondValue) {
        this.command = new MultiplicationOperation(firstValue, secondValue);
        this.commands.push(this.command);
        this.calculator.setTempResult(this.command.execute());
    }

    divisionOperation(firstValue, secondValue) {
        this.command = new DivisionOperation(firstValue, secondValue);
        this.commands.push(this.command);
        this.calculator.setTempResult(this.command.execute());
    }

    squaring(value) {
        this.command = new Squaring(value);
        this.commands.push(this.command);
        this.calculator.setResult(this.command.execute());
    }

    squareRoot(value) {
        this.command = new SquareRoot(value);
        this.commands.push(this.command);
        this.calculator.setResult(this.command.execute());
    }

    cubing(value) {
        this.command = new Cubing(value);
        this.commands.push(this.command);
        this.calculator.setResult(this.command.execute());
    }

    cubicRoot(value) {
        this.command = new CubicRoot(value);
        this.commands.push(this.command);
        this.calculator.setResult(this.command.execute());
    }

    numberToThePowerOf(firstValue, secondValue) {
        this.command = new NumberToThePowerOf(firstValue, secondValue);
        this.commands.push(this.command);
        this.calculator.setTempResult(this.command.execute());
    }

    customRoots(firstValue, secondValue) {
        this.command = new CustomRoots(firstValue, secondValue);
        this.commands.push(this.command);
        this.calculator.setTempResult(this.command.execute());
    }

    exhibitor(value) {
        this.command = new Exhibitor(value);
        this.commands.push(this.command);
        this.calculator.setResult(this.command.execute());
    }

    naturalLogarithm(value) {
        this.command = new NaturalLogarithm(value);
        this.commands.push(this.command);
        this.calculator.tempResult(this.command.execute());
    }

    decimalLogarithm(value) {
        this.command = new DecimalLogarithm(value);
        this.commands.push(this.command);
        this.calculator.tempResult(this.command.execute());
    }

    tenToThePowerOfX(value) {
        this.command = new TenToThePowerOfX(value);
        this.commands.push(this.command);
        this.calculator.setResult(this.command.execute());
    }

    correctFraction(value) {
        this.command = new CorrectFraction(value);
        this.commands.push(this.command);
        this.calculator.setResult(this.command.execute());
    }

    undo () {
        if (this.commands.length === 0) {
            throw new Error("Command stack is empty");
        }
        this.command = this.commands.pop();
        this.command.undo();
    }

    getCount () {
        return this.calculator.getResult();
    }

    setCount (value) {
        this.calculator.setResult(value);
    }

    getMemoryValue () {
        return this.calculator.getMemory();
    }

    setMemoryValue (value) {
        this.calculator.setMemory(value);
    }

    getTempResult () {
        return this.calculator.getTempResult();
    }

    setTempResult (value) {
        this.calculator.setTempResult(value);
    }
}