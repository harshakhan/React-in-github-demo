import React from "react";

export default function Count() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className="Count">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => setCounter((state) => state + 1)}>ADD</button>
      <button onClick={() => setCounter((state) => state - 1)}>Delete</button>
    </div>
  );
}