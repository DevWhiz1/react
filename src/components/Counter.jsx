import { useState } from "react";
import React from "react";
import "./counter.css"
function Counter(){
const[count,setCount]=useState(0);

const increment=()=>{
    setCount(count+1);
}

const decrement=()=>{
   setCount(count-1)
}
    return(
<>
<div>
   <h1>Counter</h1>
   <h3>Count Value:{count}</h3>
   <button onClick={increment}> Increment</button>
   <button onClick={decrement}> Decrement</button>
   <p> The current value of counter is {count}</p>
</div>
</>
    )
}

export default Counter;