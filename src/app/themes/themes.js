import {
    calculator,
    displayTheme as display,
    buttOperator as operator,
    buttNumber as number,
    allButton,
} from '../index.js';

export default function changeTheme(theme) {
    const thisClassName = theme === 'light' ? 'dark' : 'light';
    calculator.className = '';
    calculator.className = `calculator_${theme}`;
    display.className = '';
    display.className = `display_${theme}`;
    [...allButton].forEach(operator => operator.classList.remove(`button_${thisClassName}`));
    [...allButton].forEach(operator => operator.classList.add(`button_${theme}`));
    [...operator].forEach(operator => operator.classList.remove(`operator_${thisClassName}`));
    [...operator].forEach(operator => operator.classList.add(`operator_${theme}`));
    [...number].forEach(number => number.classList.remove(`number_${thisClassName}`));
    [...number].forEach(number => number.classList.add(`number_${theme}`));
}
