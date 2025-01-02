import { useState } from 'react';
import { Button } from "./ui/button";

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (number: string) => {
    setExpression(expression + number);
  };

  const handleOperatorClick = (operator: string) => {
    setExpression(expression + operator);
  };

  const handleClearClick = () => {
    setExpression('');
    setResult('');
  };

  const handleEqualsClick = () => {
    try {
      const result = eval(expression);
      setResult(result.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          value={expression}
          readOnly
          className="w-full p-2 text-lg font-bold border border-gray-300 rounded-lg"
        />
        <p className="ml-4 text-lg font-bold">{result}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col justify-between w-1/2">
          <Button onClick={() => handleNumberClick('8')}>8</Button>
          <Button className="mt-2" onClick={() => handleNumberClick('6')}>6</Button>
          <Button className="mt-2" onClick={() => handleNumberClick('4')}>4</Button>
          <Button className="mt-2" onClick={() => handleNumberClick('2')}>2</Button>
          <Button className="mt-2" onClick={() => handleNumberClick('0')}>0</Button>

        </div>
        <div className="flex flex-col justify-between w-1/2 pl-4">
          <Button onClick={() => handleNumberClick('7')}>9</Button>
          <Button className="mt-2" onClick={() => handleNumberClick('7')}>7</Button>
          <Button className="mt-2" onClick={() => handleNumberClick('5')}>5</Button>
          <Button className="mt-2" onClick={() => handleNumberClick('3')}>3</Button>
          <Button className="mt-2" onClick={() => handleNumberClick('1')}>1</Button>
        </div>
      </div>
      <div className="flex flex-row justify-center  p-4">
        <Button className="mt-2 ml-2" onClick={() => handleOperatorClick('+')}>+</Button>
        <Button className="mt-2 ml-2" onClick={() => handleOperatorClick('-')}>-</Button>
        <Button className="mt-2 ml-2" onClick={() => handleOperatorClick('*')}>*</Button>
        <Button className="mt-2 ml-2" onClick={() => handleOperatorClick('/')}>/</Button>
      </div>
      <div className="flex justify-between mt-8">
        <Button variant="secondary" onClick={handleClearClick}>Clear</Button>
        <Button variant="secondary" onClick={handleEqualsClick}>=</Button>
      </div>
    </div>
  );
};

export default Calculator;  