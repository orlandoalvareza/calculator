import { useState } from 'react';
import { evaluate } from 'mathjs';

import OperatorButton from './components/OperatorButton';

import './App.css';

function App() {
  const [input, setInput] = useState('0');
  const [isEval, setIsEval] = useState(false);

  let operatorIndex = 0;
  const operators = ['+', '-', '*', '/'];

  const addValue = (event) => {
    let value = event.target.value;

    if (isEval) {
      setInput(value);
      setIsEval(!isEval);
    } else if (input === '0') {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const operatorInputHandler = (newInput) => {
    setInput(newInput);
  }

  const operatorEvaluateHandler = (newEval) => {
    setIsEval(newEval)
  }

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

  const calculate = () => {
    let arr = input.split('');
    let lastValue = arr[arr.length - 1];

    if (operators.indexOf(lastValue) !== -1) {
      arr.splice(arr.length - 1);
      let newInput = arr.join('');

      setInput(evaluate(newInput));
    } else {
      setInput(evaluate(input));
    }

    setIsEval(true);
  };

  const deleteValue = () => {
    setInput(input.substring(0, input.length - 1));
  };

  const clearScreen = () => {
    setInput('0');
  };

  const findPercent = () => {
    setInput(input / 100);
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
          <button onClick={findPercent} id="percent">
            %
          </button>
          <OperatorButton 
            operator={'/'} 
            currentInput={input} 
            onInput={operatorInputHandler} 
            isEvaluate={isEval} 
            onIsEvaluate={operatorEvaluateHandler}
          />
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
          <OperatorButton 
            operator={'*'} 
            currentInput={input} 
            onInput={operatorInputHandler} 
            isEvaluate={isEval} 
            onIsEvaluate={operatorEvaluateHandler}
          />
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
          <OperatorButton 
            operator={'-'} 
            currentInput={input} 
            onInput={operatorInputHandler} 
            isEvaluate={isEval} 
            onIsEvaluate={operatorEvaluateHandler}
          />
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
          <OperatorButton 
            operator={'+'} 
            currentInput={input} 
            onInput={operatorInputHandler} 
            isEvaluate={isEval} 
            onIsEvaluate={operatorEvaluateHandler}
          />
        </div>
        <div className="rows">
          <button onClick={addValue} id="zero" value="0">
            0
          </button>
          <button onClick={addDecimal} id="decimal" value=".">
            .
          </button>
          <button onClick={calculate} id="equals">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
