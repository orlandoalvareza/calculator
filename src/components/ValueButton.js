const ValueButton = (props) => {
  const addValueHandler = (event) => {
    let value = event.target.value;

    if (props.isEvaluate) {
      props.onInput(value);
      props.onIsEvaluate(!props.isEvaluate);
    } else if (props.currentInput === '0') {
      props.onInput(value);
    } else {
      props.onInput(props.currentInput + value);
    }
  };

  return (
  <button onClick={addValueHandler} className={props.classNm} value={props.value}>
    {props.value}
  </button>
  )
}

export default ValueButton;