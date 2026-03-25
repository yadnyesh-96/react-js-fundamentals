
import { useState } from "react";
function App() {
  let msg="";
  const [count, setCount] = useState(0)
  if(count>10){
    msg="High"
  }else if(count<=2 || count===0){
    msg="too Low..."
  }else if(count>19){
    msg="Max.."
  } 
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => { setCount(count + 1) }} disabled={count===20} >+</button>
      <button onClick={() => { setCount(count - 1) }} disabled={count===0}>-</button>
      <h1>{msg}</h1>
    </div>
  );
}

export default App;
