const OperatorButton = (props) => {
  const operators = ['+', '-', '*', '/'];
  
  const addOperatorHandler = (event) => {
    let operator = event.target.value;
    let arr = props.currentInput.toString().split('');
    let lastOperator = arr[arr.length - 1];
    let secondLastOperator = arr[arr.length - 2];

    checkIsEvaluate(operator);

    if (lastOperator === '+' || lastOperator === '*' || lastOperator === '/') {
      replaceOperatorHandler(operator, arr);
    } else if (
      operators.indexOf(lastOperator) !== -1 &&
      operators.indexOf(secondLastOperator) !== -1
    ) {
      latestOperatorshandler(arr, operator);
    } else {
      props.onInput(props.currentInput + operator);
    }
  };

  const checkIsEvaluate = (operator) => {
    if (props.isEvaluate) {
      props.onInput(props.currentInput + operator);
      props.onIsEvaluate(!props.isEvaluate);
    }
  }

  const replaceOperatorHandler = (operator, arr) => {
    if (operator === '-') {
      props.onInput(props.currentInput + operator);
    } else {
      arr.pop();
      let newInput = arr.join('');
      props.onInput(newInput + operator);
    }
  }

  const latestOperatorshandler = (arr, operator) => {
    arr.pop();
    arr.pop();
    
    let newInput = arr.join('');
    props.onInput(newInput + operator);
  }

  return (
    <button onClick={addOperatorHandler} value={props.operator}>
      {props.operator}
    </button>
  )
}

export default OperatorButton;