// eslint-disable-next-line no-undef

import AdditionCommand from "./src/app/modules/all_commands/addition_command";
import CalculatePercentages from "./src/app/modules/all_commands/calculate_percentages";
import CorrectFraction from "./src/app/modules/all_commands/correct_fraction";
import CubicRoot from "./src/app/modules/all_commands/cubic_root";
import Cubing from "./src/app/modules/all_commands/cubing";
import CustomRoots from "./src/app/modules/all_commands/custom_roots";
import DecimalLogarithm from "./src/app/modules/all_commands/decimal_logarithm";
import DivisionOperation from "./src/app/modules/all_commands/division_operation";
import Exhibitor from "./src/app/modules/all_commands/exhibitor";
import MultiplicationOperation from "./src/app/modules/all_commands/multiplication_operation";
import NaturalLogarithm from "./src/app/modules/all_commands/natural_logarithm";
import NumberToThePowerOf from "./src/app/modules/all_commands/number_to_the_oower_of";
import SquareRoot from "./src/app/modules/all_commands/squareRoot";
import Squaring from "./src/app/modules/all_commands/squaring";
import SubtractionOperation from "./src/app/modules/all_commands/subtraction_operation";
import TenToThePowerOfX from "./src/app/modules/all_commands/ten_to_the_power_of_x";


// eslint-disable-next-line no-undef
test('Addition operation', () => {
    // eslint-disable-next-line no-undef
    expect(new AdditionCommand(4, 5).execute()).toBe(9);
});

// eslint-disable-next-line no-undef
test('Subtraction operation', () => {
    // eslint-disable-next-line no-undef
    expect(new SubtractionOperation(19, 6).execute()).toBe(13);
});

// eslint-disable-next-line no-undef
test('Muliplication operation', () => {
    // eslint-disable-next-line no-undef
    expect(new MultiplicationOperation(6, 6).execute()).toBe(36);
});

// eslint-disable-next-line no-undef
test('Division operation', () => {
    // eslint-disable-next-line no-undef
    expect(new DivisionOperation(35, 5).execute()).toBe(7);
});

// eslint-disable-next-line no-undef
test('Squaring operation', () => {
    // eslint-disable-next-line no-undef
    expect(new Squaring(5).execute()).toBe(25);
});

// eslint-disable-next-line no-undef
test('Cubing operation', () => {
    // eslint-disable-next-line no-undef
    expect(new Cubing(12).execute()).toBe(1728);
});

// eslint-disable-next-line no-undef
test('Number to the power of operation', () => {
    // eslint-disable-next-line no-undef
    expect(new NumberToThePowerOf(5, 6).execute()).toBe(15625);
});

// eslint-disable-next-line no-undef
test('Squaring root operation', () => {
    // eslint-disable-next-line no-undef
    expect(new SquareRoot(144).execute()).toBe(12);
});

// eslint-disable-next-line no-undef
test('Cubic root operation', () => {
    // eslint-disable-next-line no-undef
    expect(new CubicRoot(27).execute()).toBe(3);
});

// eslint-disable-next-line no-undef
test('Custom root operation', () => {
    // eslint-disable-next-line no-undef
    expect(new CustomRoots(4, 256).execute()).toBe(4);
});

// eslint-disable-next-line no-undef
test('Exhibitor operation', () => {
    // eslint-disable-next-line no-undef
    expect(new Exhibitor(8).execute()).toBe(2980.9579870417283);
});

// eslint-disable-next-line no-undef
test('Natural logarithm operation', () => {
    // eslint-disable-next-line no-undef
    expect(new NaturalLogarithm(6).execute()).toBe(1.791759469228055);
});

// eslint-disable-next-line no-undef
test('Decimal logarithm operation', () => {
    // eslint-disable-next-line no-undef
    expect(new DecimalLogarithm(14).execute()).toBe(1.146128035678238);
});

// eslint-disable-next-line no-undef
test('Ten to the power of X operation', () => {
    // eslint-disable-next-line no-undef
    expect(new TenToThePowerOfX(14).execute()).toBe(100000000000000);
});

// eslint-disable-next-line no-undef
test('Correct fraction operation', () => {
    // eslint-disable-next-line no-undef
    expect(new CorrectFraction(9).execute()).toBe(0.1111111111111111);
});

// eslint-disable-next-line no-undef
test('Calculate percentages operation', () => {
    // eslint-disable-next-line no-undef
    expect(new CalculatePercentages(26).execute()).toBe(0.26);
});