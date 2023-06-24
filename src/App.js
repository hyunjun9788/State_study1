import './App.css';
import {useState} from "react";
import Button from "./components/Button";
import Count from "./components/Count";

function App() {
  const [number, setNumber] = useState(0)

    const onIncrease = () => {
      setNumber(number+1)
    }
  return (
      <div>
        <Count number={number}/>
        <Button onIncrease={onIncrease}/>
      </div>
  )
}

export default App;
