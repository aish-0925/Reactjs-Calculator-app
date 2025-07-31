import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  // Validate input
  const getInputValue = () => {
    const value = inputRef.current.value;
    if (value === "") {
      alert("Please enter a number.");
      return null;
    }
    const number = Number(value);
    if (isNaN(number)) {
      alert("Invalid number input.");
      return null;
    }
    return number;
  };

  function plus(e) { 
    e.preventDefault(); 
    const number = getInputValue();
    if (number !== null) {
      setResult((result) => result + number); 
    }
  }; 
 
  function minus(e) { 
    e.preventDefault(); 
    const number = getInputValue();
    if (number !== null) {
      setResult((result) => result - number); 
    }
  };

  function times(e) { 
    e.preventDefault(); 
    const number = getInputValue();
    if (number !== null) {
      setResult((result) => result * number); 
    }
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    const number = getInputValue();
    if (number === null) return;

    if (number === 0) {
      alert("Cannot divide by zero!");
    } else {
      setResult((result) => result / number); 
    }
  };

  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = "";
  }; 
 
  function resetResult(e) { 
    e.preventDefault(); 
    setResult(0); 
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}>
          {result}
        </p> 
        <input
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>Add</button> 
        <button onClick={minus}>Subtract</button> 
        <button onClick={times}>Multiply</button> 
        <button onClick={divide}>Divide</button> 
        <button onClick={resetInput}>Reset Input</button> 
        <button onClick={resetResult}>Reset Result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App;
