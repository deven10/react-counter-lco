import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>Current Count: {count}</h2>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => count >= 10 ? "Cannot go beyond 10" :  setCount(count + 1)}>Increase count</button>
      <button onClick={() => count <= 0 ? "Cannot go in negative" : setCount(count - 1)}>Decrease count</button> 
    </div>
  );
}

export default App;
