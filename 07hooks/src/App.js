
import { useState } from "react";
function App() {
  let msg;
  const [count, setCount] = useState(0)
  if(count>10){
    msg="High"
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => { setCount(count + 1) }}>+</button>
      <button onClick={() => { setCount(count - 1) }}>-</button>
      <h1>{msg}</h1>
    </div>
  );
}

export default App;
