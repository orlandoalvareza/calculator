import { useState } from "react";
import { evaluate } from 'mathjs';

import OperatorButton from "./OperatorButton";
import ValueButton from "./ValueButton";
import DecimalButton from "./DecimalButton";

const CalculatorButtons = (props) => {
  const [isEval, setIsEval] = useState(false);

  const operators = ['+', '-', '*', '/'];

  const enteredInputHandler = (newInput) => {
    props.onSetInput(newInput);
  }

  const evaluateHandler = (newEval) => {
    setIsEval(newEval)
  }

  const calculate = () => {
    let arr = props.input.split('');
    let lastValue = arr[arr.length - 1];

    if (operators.indexOf(lastValue) !== -1) {
      arr.splice(arr.length - 1);
      let newInput = arr.join('');

      props.onSetInput(evaluate(newInput));
    } else {
      props.onSetInput(evaluate(props.input));
    }

    setIsEval(true);
  };

  const deleteValue = () => {
    props.onSetInput(props.input.substring(0, props.input.length - 1));
  };

  const clearScreen = () => {
    props.onSetInput('0');
  };

  const findPercent = () => {
    props.onSetInput(props.input / 100);
  };

  return (
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
          currentInput={props.input} 
          onInput={enteredInputHandler} 
          isEvaluate={isEval} 
          onIsEvaluate={evaluateHandler}
        />
      </div>
      <div className="rows">
        <ValueButton
          value={'7'} 
          currentInput={props.input} 
          onInput={enteredInputHandler} 
          isEvaluate={isEval} 
          onIsEvaluate={evaluateHandler}
        />
        <ValueButton
          value={'8'} 
          currentInput={props.input} 
          onInput={enteredInputHandler} 
          isEvaluate={isEval} 
          onIsEvaluate={evaluateHandler}
        />
        <ValueButton
          value={'9'} 
          currentInput={props.input} 
          onInput={enteredInputHandler} 
          isEvaluate={isEval} 
          onIsEvaluate={evaluateHandler}
        />
        <OperatorButton 
          operator={'*'} 
          currentInput={props.input} 
          onInput={enteredInputHandler} 
          isEvaluate={isEval} 
          onIsEvaluate={evaluateHandler}
        />
      </div>
      <div className="rows">
        <ValueButton
          value={'4'} 
          currentInput={props.input} 
          onInput={enteredInputHandler} 
          isEvaluate={isEval} 
          onIsEvaluate={evaluateHandler}
        />
        <ValueButton
          value={'5'} 
          currentInput={props.input} 
          onInput={enteredInputHandler} 
          isEvaluate={isEval} 
          onIsEvaluate={evaluateHandler}
        />
        <ValueButton
          value={'6'} 
          currentInput={props.input} 
          onInput={enteredInputHandler} 
          isEvaluate={isEval} 
          onIsEvaluate={evaluateHandler}
        />
        <OperatorButton 
          operator={'-'} 
          currentInput={props.input} 
          onInput={enteredInputHandler} 
          isEvaluate={isEval} 
          onIsEvaluate={evaluateHandler}
        />
      </div>
      <div className="rows">
        <ValueButton
          value={'1'} 
          currentInput={props.input} 
          onInput={enteredInputHandler} 
          isEvaluate={isEval} 
          onIsEvaluate={evaluateHandler}
        />
        <ValueButton
          value={'2'} 
          currentInput={props.input} 
          onInput={enteredInputHandler} 
          isEvaluate={isEval} 
          onIsEvaluate={evaluateHandler}
        />
        <ValueButton
          value={'3'} 
          currentInput={props.input} 
          onInput={enteredInputHandler} 
          isEvaluate={isEval} 
          onIsEvaluate={evaluateHandler}
        />
        <OperatorButton 
          operator={'+'} 
          currentInput={props.input} 
          onInput={enteredInputHandler} 
          isEvaluate={isEval} 
          onIsEvaluate={evaluateHandler}
        />
      </div>
      <div className="rows">
        <ValueButton
          value={'0'} 
          classNm='zero-button'
          currentInput={props.input} 
          onInput={enteredInputHandler} 
          isEvaluate={isEval} 
          onIsEvaluate={evaluateHandler}
        />
        <DecimalButton
          currentInput={props.input} 
          onInput={enteredInputHandler}
        />
        <button onClick={calculate} id="equals">
          =
        </button>
      </div>
    </div>
  )
}

export default CalculatorButtons;