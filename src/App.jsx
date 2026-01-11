import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, SetInputValue] = useState();

  const incrementHandler = () => {
    setCount(count + 1);
  };
  const decrementHandler = () => {
    setCount(() => Math.max(count - 1, 0));
  };
  // const inputValueHandler = () => {};

  return (
    <>
      <div className="counter-app">
        <h1>Counter App</h1>
        <h1>{count}</h1>
        <div className="button">
          <button type="sumbit" onClick={incrementHandler}>
            Increase
          </button>
          <button type="sumbit" onClick={decrementHandler}>
            Decrease
          </button>
          <button type="sumbit" onClick={() => setCount(0)}>
            Reset to 0
          </button>
        </div>
        <div className="input-form">
          <input
            type="text"
            className="input"
            value={inputValue}
            onChange={(e) => SetInputValue(Number(e.target.value))}
          />
          <button type="submit" onClick={() => setCount(inputValue)}>
            Set to {inputValue}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
