import { useState } from 'react';

import './App.css';

function App() {
  const [input, setInput] = useState('0');
  const [isEval, setIsEval] = useState(false);

  let operatorIndex = 0;
  const operators = ['+', '-', '*', '/'];

  const addValue = (event) => {
    let value = event.target.value;

    if (input === '0') {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const addOperator = (event) => {
    let operator = event.target.value;
    let arr = input.toString().split('');
    let lastOperator = arr[arr.length - 1];
    let secondLastOperator = arr[arr.length - 2];

    if (isEval) {
      setInput(input + operator);
      setIsEval(!isEval);
    }

    if (lastOperator === '+' || lastOperator === '*' || lastOperator === '/') {
      if (operator === '-') {
        setInput(input + operator);
      } else {
        arr.pop();
        let newInput = arr.join('');
        setInput(newInput + operator);
      }
    } else if (
      operators.indexOf(lastOperator) !== -1 &&
      operators.indexOf(secondLastOperator) !== -1
    ) {
      arr.pop();
      arr.pop();
      let newInput = arr.join('');
      setInput(newInput + operator);
    } else {
      setInput(input + operator);
    }
  };

  const addDecimal = () => {
    let arr = input.split('');
    let lastValue = arr[arr.length - 1];

    if (operators.indexOf(lastValue) !== -1) {
      arr.splice(arr.length, 0, '0');
      let newInput = arr.join('');

      setInput(newInput + '.');
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (operators.indexOf(arr[i]) !== -1) {
          operatorIndex = i;
        }
      }

      let newArr = arr.slice(operatorIndex, arr.length);

      if (!newArr.includes('.')) {
        setInput(input + '.');
      }
    }
  };

  const deleteValue = () => {
    setInput(input.substring(0, input.length - 1));
  };

  const clearScreen = () => {
    setInput('0');
  };

  return (
    <div className="App">
      <div id="display">{input}</div>
      <div className="calculator-buttons">
        <div className="rows">
          <button onClick={clearScreen} id="clear">
            AC
          </button>
          <button onClick={deleteValue} id="delete">
            Del
          </button>
          <button id="percent">
            %
          </button>
          <button onClick={addOperator} id="divide" value="/">
            /
          </button>
        </div>
        <div className="rows">
          <button onClick={addValue} id="seven" value="7">
            7
          </button>
          <button onClick={addValue} id="eight" value="8">
            8
          </button>
          <button onClick={addValue} id="nine" value="9">
            9
          </button>
          <button onClick={addOperator} id="multiply" value="*">
            x
          </button>
        </div>
        <div className="rows">
          <button onClick={addValue} id="four" value="4">
            4
          </button>
          <button onClick={addValue} id="five" value="5">
            5
          </button>
          <button onClick={addValue} id="six" value="6">
            6
          </button>
          <button onClick={addOperator} id="subtract" value="-">
            -
          </button>
        </div>
        <div className="rows">
          <button onClick={addValue} id="one" value="1">
            1
          </button>
          <button onClick={addValue} id="two" value="2">
            2
          </button>
          <button onClick={addValue} id="three" value="3">
            3
          </button>
          <button onClick={addOperator} id="add" value="+">
            +
          </button>
        </div>
        <div className="rows">
          <button onClick={addValue} id="zero" value="0">
            0
          </button>
          <button onClick={addDecimal} id="decimal" value=".">
            .
          </button>
          <button id="equals">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
