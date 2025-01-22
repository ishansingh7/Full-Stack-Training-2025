import { useState } from "react";

const UseStateExample = () => {
  const initialValue = 0; 
  const [num, setNum] = useState(initialValue);

  return (
    <div>
      <h1>This is useState Example</h1>
      <button onClick={() => setNum(num - 1)}>-</button>
      <h4>The number is {num}</h4>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(initialValue)}>Reset</button>
    </div>
  );
};

export default UseStateExample;
