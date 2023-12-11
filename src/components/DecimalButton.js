const DecimalButton = (props) => {
  let operatorIndex = 0;
  const operators = ['+', '-', '*', '/'];

  const addDecimalHandler = () => {
    let arr = props.currentInput.split('');
    let lastValue = arr[arr.length - 1];

    if (operators.indexOf(lastValue) !== -1) {
      arr.splice(arr.length, 0, '0');
      let newInput = arr.join('');
      
      props.onInput(newInput + '.');
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (operators.indexOf(arr[i]) !== -1) {
          operatorIndex = i;
        }
      }

      let newArr = arr.slice(operatorIndex, arr.length);

      if (!newArr.includes('.')) {
        props.onInput(props.currentInput + '.');
      }
    }
  };

  return (
    <button onClick={addDecimalHandler} id="decimal" value=".">
      .
    </button>
  )
}

export default DecimalButton;