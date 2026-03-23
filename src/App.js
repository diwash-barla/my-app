import React, { useState } from 'react';
import Calculator from './Calculator';
import './index.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [memory, setMemory] = useState(0);
  const calculator = new Calculator();

  const handleNumberClick = (num) => {
    setDisplay(display === '0' ? String(num) : display + num);
  };

  const handleOperator = (op) => {
    const result = calculator.calculate(parseFloat(display), op);
    setDisplay(String(result));
  };

  const handleEquals = () => {
    const result = calculator.getResult(parseFloat(display));
    setDisplay(String(result));
  };

  const handleClear = () => {
    calculator.clear();
    setDisplay('0');
    setMemory(0);
  };

  const handleFunction = (func) => {
    let result;
    const num = parseFloat(display);
    switch(func) {
      case 'sqrt':
        result = Math.sqrt(num);
        break;
      case 'sin':
        result = Math.sin(num * Math.PI / 180);
        break;
      case 'cos':
        result = Math.cos(num * Math.PI / 180);
        break;
      case 'tan':
        result = Math.tan(num * Math.PI / 180);
        break;
      case 'log':
        result = Math.log10(num);
        break;
      case 'ln':
        result = Math.log(num);
        break;
      case 'pow':
        result = num * num;
        break;
      default:
        result = num;
    }
    setDisplay(String(result.toFixed(6)));
  };

  const handleMemory = (op) => {
    const num = parseFloat(display);
    switch(op) {
      case 'M+':
        setMemory(memory + num);
        break;
      case 'M-':
        setMemory(memory - num);
        break;
      case 'MR':
        setDisplay(String(memory));
        break;
      case 'MC':
        setMemory(0);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>🧮 Scientific Calculator</h1>
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button className="memory" onClick={() => handleMemory('MC')}>MC</button>
          <button className="memory" onClick={() => handleMemory('MR')}>MR</button>
          <button className="memory" onClick={() => handleMemory('M+')}>M+</button>
          <button className="memory" onClick={() => handleMemory('M-')}>M-</button>

          <button className="function" onClick={() => handleFunction('sqrt')}>√</button>
          <button className="function" onClick={() => handleFunction('pow')}>x²</button>
          <button className="function" onClick={() => handleFunction('sin')}>sin</button>
          <button className="operator" onClick={() => handleOperator('/')}>÷</button>

          <button className="function" onClick={() => handleFunction('cos')}>cos</button>
          <button className="function" onClick={() => handleFunction('tan')}>tan</button>
          <button className="function" onClick={() => handleFunction('log')}>log</button>
          <button className="operator" onClick={() => handleOperator('*')}>×</button>

          <button className="number" onClick={() => handleNumberClick(7)}>7</button>
          <button className="number" onClick={() => handleNumberClick(8)}>8</button>
          <button className="number" onClick={() => handleNumberClick(9)}>9</button>
          <button className="operator" onClick={() => handleOperator('-')}>−</button>

          <button className="number" onClick={() => handleNumberClick(4)}>4</button>
          <button className="number" onClick={() => handleNumberClick(5)}>5</button>
          <button className="number" onClick={() => handleNumberClick(6)}>6</button>
          <button className="operator" onClick={() => handleOperator('+')}>+</button>

          <button className="number" onClick={() => handleNumberClick(1)}>1</button>
          <button className="number" onClick={() => handleNumberClick(2)}>2</button>
          <button className="number" onClick={() => handleNumberClick(3)}>3</button>
          <button className="function" onClick={() => handleFunction('ln')}>ln</button>

          <button className="number" onClick={() => handleNumberClick(0)}>0</button>
          <button className="number" onClick={() => handleNumberClick('.')}>.</button>
          <button className="equals" onClick={handleEquals}>=</button>

          <button className="clear" onClick={handleClear}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default App;