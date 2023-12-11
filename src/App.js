import { useState } from 'react';

import CalculatorButtons from './components/CalculatorButtons';
import './App.css';

function App() {
  const [input, setInput] = useState('0');

  const enteredInputHandler = (newInput) => {
    setInput(newInput)
  }

  return (
    <div className="App">
      <div id="display">{input}</div>
      <CalculatorButtons input={input} onSetInput={enteredInputHandler}/>
    </div>
  );
}

export default App;
