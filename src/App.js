import './App.css';

function App() {
  return (
    <div className="App">
      <div id="display">{'input'}</div>
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
          <button id="seven" value="7">
            7
          </button>
          <button id="eight" value="8">
            8
          </button>
          <button id="nine" value="9">
            9
          </button>
          <button id="multiply" value="*">
            x
          </button>
        </div>
        <div className="rows">
          <button id="four" value="4">
            4
          </button>
          <button id="five" value="5">
            5
          </button>
          <button id="six" value="6">
            6
          </button>
          <button id="subtract" value="-">
            -
          </button>
        </div>
        <div className="rows">
          <button id="one" value="1">
            1
          </button>
          <button id="two" value="2">
            2
          </button>
          <button id="three" value="3">
            3
          </button>
          <button id="add" value="+">
            +
          </button>
        </div>
        <div className="rows">
          <button id="zero" value="0">
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
