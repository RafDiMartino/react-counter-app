import { useState, useEffect } from "react"

function App() {
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const[counterUpLive, setCounterUpLive] = useState(false);
  const[counterDownLive, setCounterDownLive] = useState(false);

  useEffect(() => {
    if(counterUpLive){
      setTimeout(() => {
        setCount(count + 1)
      }, 1000);
    }
  }, [count, counterUpLive]);

  useEffect(() => {
    if(counterDownLive){
      setTimeout(() => {
        setCount(count - 1)
      }, 1000);
    }
  }, [count, counterDownLive]);

  const countChange = value => () => {
    setCount(value)
  }

  const handleChange = e => {
    setInputVal(e.target.value)
  }

  const countClear = () => {
    setCount(0)
    window.location.reload()
  }

  const handleClickUpdate = () => {
    setCount(Number(inputVal))
    setInputVal("")
  }

  const handleCountUp = () => {
    setCounterUpLive(!counterUpLive);
  }

  const handleCountDown = () => {
    setCounterDownLive(!counterDownLive);
  }

  return (
    <div className="App">
      <h1 className="title">Counter App</h1>
      <div className="setCount">
        <label>Start count from <br />
          <input onChange={handleChange} value={inputVal} type="number" />
        </label>
        <button className="btnUpdate" onClick={handleClickUpdate}>Update</button>
      </div>
      <h2 className="count">{count}</h2>
      <div className="manualCountContainer">
        <button className="manualCount" onClick={countChange(count - 1)}>-</button>
        <button className="manualCount reset" onClick={countClear}>C</button>
        <button className="manualCount" onClick={countChange(count + 1)}>+</button>
      </div>
      <div className="autoCountContainer">
        <button className="autoCount" onClick={handleCountDown}>{counterDownLive ? "Stop" : "Start"}<br /> count down</button>
        <button className="autoCount" onClick={handleCountUp}>{counterUpLive ? "Stop" : "Start"}<br /> count up</button>
      </div>
    </div>
  );
}

export default App;


