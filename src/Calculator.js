class Calculator {
  constructor() {
    this.previousValue = null;
    this.currentValue = '';
    this.operation = null;
  }

  calculate(num, operation) {
    if (this.operation && this.currentValue !== '') {
      const result = this.performOperation(this.previousValue, num, this.operation);
      this.previousValue = result;
      this.currentValue = '';
    } else {
      this.previousValue = num;
    }
    this.operation = operation;
    return this.previousValue;
  }

  performOperation(prev, current, operation) {
    switch(operation) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case '*':
        return prev * current;
      case '/':
        return prev / current;
      default:
        return current;
    }
  }

  getResult(num) {
    if (this.operation) {
      const result = this.performOperation(this.previousValue, num, this.operation);
      this.clear();
      return result;
    }
    return num;
  }

  clear() {
    this.previousValue = null;
    this.currentValue = '';
    this.operation = null;
  }
}

export default Calculator;