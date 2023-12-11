import { useState } from 'react';
import { evaluate } from 'mathjs';

import ValueButton from './components/ValueButton';
import OperatorButton from './components/OperatorButton';
import DecimalButton from './components/DecimalButton';

import './App.css';

function App() {
  const [input, setInput] = useState('0');
  const [isEval, setIsEval] = useState(false);

  const operators = ['+', '-', '*', '/'];

  const enteredInputHandler = (newInput) => {
    setInput(newInput);
  }

  const evaluateHandler = (newEval) => {
    setIsEval(newEval)
  }

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
            onInput={enteredInputHandler} 
            isEvaluate={isEval} 
            onIsEvaluate={evaluateHandler}
          />
        </div>
        <div className="rows">
          <ValueButton
            value={'7'} 
            currentInput={input} 
            onInput={enteredInputHandler} 
            isEvaluate={isEval} 
            onIsEvaluate={evaluateHandler}
          />
          <ValueButton
            value={'8'} 
            currentInput={input} 
            onInput={enteredInputHandler} 
            isEvaluate={isEval} 
            onIsEvaluate={evaluateHandler}
          />
          <ValueButton
            value={'9'} 
            currentInput={input} 
            onInput={enteredInputHandler} 
            isEvaluate={isEval} 
            onIsEvaluate={evaluateHandler}
          />
          <OperatorButton 
            operator={'*'} 
            currentInput={input} 
            onInput={enteredInputHandler} 
            isEvaluate={isEval} 
            onIsEvaluate={evaluateHandler}
          />
        </div>
        <div className="rows">
          <ValueButton
            value={'4'} 
            currentInput={input} 
            onInput={enteredInputHandler} 
            isEvaluate={isEval} 
            onIsEvaluate={evaluateHandler}
          />
          <ValueButton
            value={'5'} 
            currentInput={input} 
            onInput={enteredInputHandler} 
            isEvaluate={isEval} 
            onIsEvaluate={evaluateHandler}
          />
          <ValueButton
            value={'6'} 
            currentInput={input} 
            onInput={enteredInputHandler} 
            isEvaluate={isEval} 
            onIsEvaluate={evaluateHandler}
          />
          <OperatorButton 
            operator={'-'} 
            currentInput={input} 
            onInput={enteredInputHandler} 
            isEvaluate={isEval} 
            onIsEvaluate={evaluateHandler}
          />
        </div>
        <div className="rows">
          <ValueButton
            value={'1'} 
            currentInput={input} 
            onInput={enteredInputHandler} 
            isEvaluate={isEval} 
            onIsEvaluate={evaluateHandler}
          />
          <ValueButton
            value={'2'} 
            currentInput={input} 
            onInput={enteredInputHandler} 
            isEvaluate={isEval} 
            onIsEvaluate={evaluateHandler}
          />
          <ValueButton
            value={'3'} 
            currentInput={input} 
            onInput={enteredInputHandler} 
            isEvaluate={isEval} 
            onIsEvaluate={evaluateHandler}
          />
          <OperatorButton 
            operator={'+'} 
            currentInput={input} 
            onInput={enteredInputHandler} 
            isEvaluate={isEval} 
            onIsEvaluate={evaluateHandler}
          />
        </div>
        <div className="rows">
          <ValueButton
            value={'0'} 
            classNm='zero-button'
            currentInput={input} 
            onInput={enteredInputHandler} 
            isEvaluate={isEval} 
            onIsEvaluate={evaluateHandler}
          />
          <DecimalButton
            currentInput={input} 
            onInput={enteredInputHandler}
          />
          <button onClick={calculate} id="equals">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
