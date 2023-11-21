import { useState } from 'react';

import './App.css';

function App() {
  const [input, setInput] = useState('0');

  const addValue = (event) => {
    let value = event.target.value;

    if (input === '0') {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="App">
      <div id="display">{input}</div>
      <div className="calculator-buttons">
        <div className="rows">
          <button id="clear">
            AC
          </button>
          <button id="delete">
            Del
          </button>
          <button id="percent">
            %
          </button>
          <button id="divide" value="/">
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
          <button id="multiply" value="*">
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
          <button id="subtract" value="-">
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
          <button id="add" value="+">
            +
          </button>
        </div>
        <div className="rows">
          <button onClick={addValue} id="zero" value="0">
            0
          </button>
          <button id="decimal" value=".">
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
