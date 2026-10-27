import { useState } from 'react';
import './App.css';

// const Calculator = (props) => {
//   return "This is a Component: " + props.sum ;
// }

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        {/* { Calculator() } */}
        {/* <Calculator sum={4} /> */}
        <button onClick={handleIncrement} > Count: { count } </button>
      </div>
    </>
  );
}

export default App
