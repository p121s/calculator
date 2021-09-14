import Executor from './modules/executor.js';
import User from './modules/user.js';
import changeTheme from './themes/themes.js';
import '../style/style.scss';

const user = new User();
const accountant = new Executor();

const buttonLightTheme = document.getElementById('button_light');
const buttonDarkTheme = document.getElementById('button_dark');

export const calculator = document.getElementById('calculator');
export const displayTheme = document.getElementById('display');
export const buttOperator = document.getElementsByClassName(`operator`);
export const buttNumber = document.getElementsByClassName(`number`);

const buttonAllClear = document.getElementById('all_clean');
const buttonFloatPoint = document.getElementsByClassName('floating_point');
const display = document.getElementById('display').children[0];
const buttonAdd = document.getElementById('add');
const buttonMinus = document.getElementById('minus');
const buttonResult = document.getElementById('result');
const buttonMultiply = document.getElementById('multiply');
const buttonDivide = document.getElementById('divide');
const buttonMemoryAdd = document.getElementById('memory_add');
const buttomMemoryMinus = document.getElementById('memory_minus');
const buttomMemoryClear = document.getElementById('memory_clear');
const buttonMemoryRead = document.getElementById('memory_read');
const buttonChangeSign = document.getElementById('change_sign');
const buttonPercentages = document.getElementById('percentages');
const squaringButton = document.getElementById('squaring');
const squareRootButton = document.getElementById('square_root');
const cubingButton = document.getElementById('cubing');
const cubicRootButton = document.getElementById('cubic_root');
const buttonNumberToThePowerOf = document.getElementById('number_to_the_power_of');
const buttonCustomRoots = document.getElementById('custom_roots');
const buttonExhibitor = document.getElementById('exhibitor');
const buttonNaturalLogarithm = document.getElementById('natural_logarithm');
const buttondecimalLogarithm = document.getElementById('decimal_logarithm');
const buttontenToThePowerOfX = document.getElementById('ten_to_the_power_of_x');
const buttonCorrectFraction = document.getElementById('correct_fraction');
const buttonOpeningParenthesis = document.getElementById('opening_parenthesis');
const buttonClosingParenthesis = document.getElementById('closing_parenthesis');

let flagFloatPoint = false;
let flagOperator = false;
let availabilityOpeningParenthesis = 0;
let displayString = '0';

let numbers = [];
let operations = [];
let maxPriority = 0;
let priority = 0;

function clickButtonsOperations(sign, priority, operation) {
    if (!flagOperator) {
        numbers.push(+user.getValue());
        operations.push({ priority, operation });
        displayString += sign;
        display.innerHTML = displayString;
        user.setValue('');
        flagFloatPoint = false;
    }
    flagOperator = true;
}

function calculateResult(maxPriority, numbers, operations) {
    if (numbers.length === 1 && operations.length === 0) {
        return numbers[0];
    }
    const perform = operations
        .map((operation, index) => {
            if (operation.priority === maxPriority) {
                return index;
            }
        })
        .filter(index => !isNaN(index));

    let numindex = 1;
    perform.forEach((index, i) => {
        i > 0 ? (index -= numindex++) : index;
        accountant[operations[index].operation](
            numbers[index],
            numbers[index + 1],
        );
        numbers.splice(index, 2, accountant.getTempResult());
        accountant.setTempResult(0);
        operations.splice(index, 1);
    });
    return calculateResult((maxPriority -= 1), numbers, operations);
}

buttonLightTheme.addEventListener('click', () => {
    changeTheme('light');
});

buttonDarkTheme.addEventListener('click', () => {
    changeTheme('dark');
});

buttonOpeningParenthesis.addEventListener('click', () => {
    availabilityOpeningParenthesis += 1;
    priority += 3;
    display.innerHTML = displayString += '(';
});

buttonClosingParenthesis.addEventListener('click', () => {
    if (availabilityOpeningParenthesis !== 0) {
        availabilityOpeningParenthesis -= 1;
        priority -= 3;
        display.innerHTML = displayString += ')';
    }
});

buttonMemoryAdd.addEventListener('click', () => {
    if (!isNaN(display.innerHTML)) {
        accountant.memoryAdd(+display.innerHTML);
    }
    buttomMemoryClear.style.backgroundColor = 'green';
});

buttomMemoryMinus.addEventListener('click', () => {
    if (!isNaN(display.innerHTML)) {
        accountant.memoryMinus(+user.getValue());
    }
});

buttomMemoryClear.addEventListener('click', () => {
    accountant.memoryClear();
});

buttonMemoryRead.addEventListener('click', () => {
    if (displayString === '0') {
        displayString = '';
        display.innerHTML = '';
    }
    if (display.innerHTML === '0' && accountant.getMemoryValue() === 0) {
        display.innerHTML = '0';
    } else {
        display.innerHTML = displayString += accountant.getMemoryValue();
        user.setValue(accountant.getMemoryValue());
    }
});

buttonChangeSign.addEventListener('click', () => {
    if (!isNaN(display.innerHTML)) {
        accountant.changeSign(+display.innerHTML);
        user.setValue(accountant.getTempResult());
        displayString = accountant.getTempResult();
        display.innerHTML = displayString;
    }
    accountant.setTempResult(0);
});

buttonPercentages.addEventListener('click', () => {
    const dividePriority = 2 + priority;
    maxPriority < dividePriority ? (maxPriority = dividePriority) : maxPriority;
    clickButtonsOperations('/', dividePriority, 'divisionOperation');
    numbers.push(100);
    accountant.setCount(calculateResult(maxPriority, numbers, operations));
    user.setValue(accountant.getCount());
    numbers = [];
    operations = [];
    displayString = accountant.getCount();
    display.innerHTML = displayString;
    accountant.setTempResult(0);
    flagOperator = false;
    flagFloatPoint = true;
});

squaringButton.addEventListener('click', () => {
    if (!isNaN(+display.innerHTML)) {
        accountant.squaring(+display.innerHTML);
        user.setValue(accountant.getCount());
        display.innerHTML = displayString = accountant.getCount();
    }
});

squareRootButton.addEventListener('click', () => {
    if (!isNaN(+display.innerHTML)) {
        accountant.squareRoot(+display.innerHTML);
        user.setValue(accountant.getCount());
        display.innerHTML = displayString = accountant.getCount();
    }
});

cubingButton.addEventListener('click', () => {
    if (!isNaN(+display.innerHTML)) {
        accountant.cubing(+display.innerHTML);
        user.setValue(accountant.getCount());
        display.innerHTML = displayString = accountant.getCount();
    }
});

cubicRootButton.addEventListener('click', () => {
    if (!isNaN(+display.innerHTML)) {
        accountant.cubicRoot(+display.innerHTML);
        user.setValue(accountant.getCount());
        display.innerHTML = displayString = accountant.getCount();
    }
});

buttonNumberToThePowerOf.addEventListener('click', () => {
    const numberToThePowerOfPriority = 3 + priority;
    maxPriority < numberToThePowerOfPriority
        ? (maxPriority = numberToThePowerOfPriority)
        : maxPriority;
    clickButtonsOperations(
        '^',
        numberToThePowerOfPriority,
        'numberToThePowerOf',
    );
});

buttonCustomRoots.addEventListener('click', () => {
    const customRoots = 3 + priority;
    maxPriority < customRoots ? (maxPriority = customRoots) : maxPriority;
    clickButtonsOperations('&#8730;', customRoots, 'customRoots');
});

buttonExhibitor.addEventListener('click', () => {
    if (!isNaN(+display.innerHTML)) {
        accountant.exhibitor(+display.innerHTML);
        user.setValue(accountant.getCount());
        display.innerHTML = displayString = accountant.getCount();
    }
});

buttonNaturalLogarithm.addEventListener('click', () => {
    if (!isNaN(+display.innerHTML)) {
        accountant.naturalLogarithm(+display.innerHTML);
        user.setValue(accountant.getCount());
        display.innerHTML = displayString = accountant.getCount();
    }
});

buttondecimalLogarithm.addEventListener('click', () => {
    if (!isNaN(+display.innerHTML)) {
        accountant.decimalLogarithm(+display.innerHTML);
        user.setValue(accountant.getCount());
        display.innerHTML = displayString = accountant.getCount();
    }
});

buttontenToThePowerOfX.addEventListener('click', () => {
    if (!isNaN(+display.innerHTML)) {
        accountant.tenToThePowerOfX(+display.innerHTML);
        user.setValue(accountant.getCount());
        display.innerHTML = displayString = accountant.getCount();
    }
});

buttonCorrectFraction.addEventListener('click', () => {
    if (!isNaN(+display.innerHTML)) {
        accountant.correctFraction(+display.innerHTML);
        user.setValue(accountant.getCount());
        display.innerHTML = displayString = accountant.getCount();
    }
});

buttonAdd.addEventListener('click', () => {
    const addPriority = 1 + priority;
    maxPriority < addPriority ? (maxPriority = addPriority) : maxPriority;
    clickButtonsOperations('+', addPriority, 'additionOperation');
});

buttonMinus.addEventListener('click', () => {
    const minusPriority = 1 + priority;
    maxPriority < minusPriority ? (maxPriority = minusPriority) : maxPriority;
    clickButtonsOperations('-', minusPriority, 'subtractionOperation');
});

buttonMultiply.addEventListener('click', () => {
    const multiplyPriority = 2 + priority;
    maxPriority < multiplyPriority
        ? (maxPriority = multiplyPriority)
        : maxPriority;
    clickButtonsOperations(
        '&#215;',
        multiplyPriority,
        'multiplicationOperation',
    );
});

buttonDivide.addEventListener('click', () => {
    const dividePriority = 2 + priority;
    maxPriority < dividePriority ? (maxPriority = dividePriority) : maxPriority;
    clickButtonsOperations('&#247;', dividePriority, 'divisionOperation');
});

buttonResult.addEventListener('click', () => {
    numbers.push(+user.getValue());
    accountant.setCount(calculateResult(maxPriority, numbers, operations));
    user.setValue(accountant.getCount());
    numbers = [];
    operations = [];
    displayString = accountant.getCount();
    display.innerHTML = displayString;
    accountant.setCount(0);
    flagFloatPoint = false;
    availabilityOpeningParenthesis = 0;
});

buttonAllClear.addEventListener('click', () => {
    accountant.allClean();
    user.setValue('0');
    accountant.setCount(0);
    displayString = '0';
    display.innerHTML = displayString;
    numbers = [];
    operations = [];
    flagFloatPoint = false;
});

[...buttonFloatPoint][0].addEventListener('click', () => {
    if (!flagFloatPoint) {
        if (user.getValue() === '') {
            user.setValue(`0${[...buttonFloatPoint][0].innerHTML}`);
        }
        user.setValue(user.getValue() + [...buttonFloatPoint][0].innerHTML);
        displayString += [...buttonFloatPoint][0].innerHTML;
        display.innerHTML = displayString;
        flagFloatPoint = true;
    }
});

[...buttNumber].forEach(button =>
    button.addEventListener('click', () => {
        if (user.getValue() === '0' && displayString === '0') {
            user.setValue('');
            displayString = '';
        }
        user.setValue(user.getValue() + button.innerHTML);
        displayString += button.innerHTML;
        display.innerHTML = displayString;
        flagOperator = false;
    }),
);
