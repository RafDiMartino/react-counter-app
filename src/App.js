import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="title">Counter App</h1>
      <div className="countContainer">
        <button className="btnCount" onClick={() => setCount(count - 1)}>-</button>
        <h2 className="count">{count}</h2>
        <button className="btnCount" onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button className="btnCount reset" onClick={() => setCount(0)}>&#10006;</button>
    </div>
  );
}

export default App;
