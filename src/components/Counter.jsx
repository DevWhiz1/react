// Importing the useState hook from React, which is used for managing state in functional components.
import { useState } from "react";

// Importing React library, which is necessary to create and use React components.
import React from "react";

// Importing the CSS file for styling the Counter component.
import "./counter.css";

function Counter() {
  // Declaring a state variable 'count' with an initial value of 0, and a function 'setCount' to update its value.
  const [count, setCount] = useState(0);

  // Function to increment the count value by 1.
  const increment = () => {
    // Calling setCount to update the state variable 'count' by adding 1 to its current value.
    setCount(count + 1);
  };

  // Function to decrement the count value by 1.
  const decrement = () => {
    // Calling setCount to update the state variable 'count' by subtracting 1 from its current value.
    setCount(count - 1);
  };

  // The component's return statement, rendering the UI elements.
  return (
    <>
      <div>
        {/* Displaying a title for the counter */}
        <h1>Counter</h1>

        {/* Displaying the current count value */}
        <h3>Count Value: {count}</h3>

        {/* Button to increment the count. When clicked, it calls the increment function */}
        <button onClick={increment}> Increment</button>

        {/* Button to decrement the count. When clicked, it calls the decrement function */}
        <button onClick={decrement}> Decrement</button>

        {/* Displaying the current count value with some additional text */}
        <p> The current value of counter is {count}</p>
      </div>
    </>
  );
}

export default Counter;
