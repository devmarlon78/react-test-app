import { useState } from "react";

const Counter = () => {

  const [count, setCount] = useState(() => {
    console.log('Init count state...');
    return 0;
  });

  const clickHandler = () => {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <h2>
        Count: { count }
        <button onClick={clickHandler} >Increment</button>
      </h2>
    </>
  );
}

export default Counter;