import './App.css';
import {useState} from "react";

function App() {
  const [number, setNumber] = useState(0)

    const onIncrease = () => {
      setNumber(number+1)
    }
  return (
      <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
      </div>
  )
}

export default App;
