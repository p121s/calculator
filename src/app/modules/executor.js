// eslint-disable-next-line no-undef
const calculator = require('./calculator.js');
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
import Cubling from "./all_commands/cubing.js";
import CublingRoot from "./all_commands/cubic_root.js";
import NumberToThePowerOf from "./all_commands/number_to_the_oower_of.js";
import CustomRoots from "./all_commands/custom_roots.js";
import Exhibitor from "./all_commands/exhibitor.js";
import NaturalLogarithm from "./all_commands/natural_logarithm.js";
import DecimalLogarithm from "./all_commands/decimal_logarithm.js";
import TenToThePowerOfX from "./all_commands/decimal_logarithm.js";
import CorrectFraction from "./all_commands/correct_fraction.js";

export default class Executor {
    constructor() {
        this.calculator = calculator;
        this.commands = [];
        this.command = null;
    }

    memoryAdd(value) {
        this.command = new MemoryAdd(this.calculator, value);
        this.commands.push(this.command);
        this.command.execute();
    }

    memoryMinus(value) {
        this.command = new MemoryMinus(this.calculator, value);
        this.commands.push(this.command);
        this.command.execute();
    }

    memoryClear() {
        this.command = new MemoryClear(this.calculator);
        this.commands.push(this.command);
        this.command.execute();
    }

    changeSign(value) {
        this.command = new ChangeSign(this.calculator, value);
        this.commands.push(this.command);
        this.command.execute();
    }

    calculatePercentages(value) {
        this.command = new CalculatePercentages(this.calculator, value);
        this.commands.push(this.command);
        this.command.execute();
    }

    allClean() {
        this.command = new AllClean(this.calculator);
        this.commands = [];
        this.command = null;
    }

    additionOperation(firstValue, secondValue) {
        this.command = new AdditionCommand(this.calculator, firstValue, secondValue);
        this.commands.push(this.command);
        this.command.execute();
    }

    subtractionOperation(firstValue, secondValue) {
        this.command = new SubtractionOperation(this.calculator, firstValue, secondValue);
        this.commands.push(this.command);
        this.command.execute();
    }

    multiplicationOperation(firstValue, secondValue) {
        this.command = new MultiplicationOperation(this.calculator, firstValue, secondValue);
        this.commands.push(this.command);
        this.command.execute();
    }

    divisionOperation(firstValue, secondValue) {
        this.command = new DivisionOperation(this.calculator, firstValue, secondValue);
        this.commands.push(this.command);
        this.command.execute();
    }

    squaring(value) {
        this.command = new Squaring(this.calculator, value);
        this.commands.push(this.command);
        this.command.execute();
    }

    squareRoot(value) {
        this.command = new SquareRoot(this.calculator, value);
        this.commands.push(this.command);
        this.command.execute();
    }

    cubing(value) {
        this.command = new Cubling(this.calculator, value);
        this.commands.push(this.command);
        this.command.execute();
    }

    cubicRoot(value) {
        this.command = new CublingRoot(this.calculator, value);
        this.commands.push(this.command);
        this.command.execute();
    }

    numberToThePowerOf(firstValue, secondValue) {
        this.command = new NumberToThePowerOf(this.calculator, firstValue, secondValue);
        this.commands.push(this.command);
        this.command.execute();
    }

    customRoots(firstValue, secondValue) {
        this.command = new CustomRoots(this.calculator, firstValue, secondValue);
        this.commands.push(this.command);
        this.command.execute();
    }

    exhibitor(value) {
        this.command = new Exhibitor(this.calculator, value);
        this.commands.push(this.command);
        this.command.execute();
    }

    naturalLogarithm(value) {
        this.command = new NaturalLogarithm(this.calculator, value);
        this.commands.push(this.command);
        this.command.execute();
    }

    decimalLogarithm(value) {
        this.command = new DecimalLogarithm(this.calculator, value);
        this.commands.push(this.command);
        this.command.execute();
    }

    tenToThePowerOfX(value) {
        this.command = new TenToThePowerOfX(this.calculator, value);
        this.commands.push(this.command);
        this.command.execute();
    }

    correctFraction(value) {
        this.command = new CorrectFraction(this.calculator, value);
        this.commands.push(this.command);
        this.command.execute();
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