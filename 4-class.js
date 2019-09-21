class Calculator {
  static sum(x, y) {
    return x + y;
  }

  sum2(x, y) {
    return x + y;
  }

  multiply(x, y) {
    return x * y;
  }
}
const CalculatorObj = new Calculator();

console.log(Calculator.sum(4, 5));
console.log(CalculatorObj.sum2(49, 5));
console.log(CalculatorObj.multiply(2, 5));
