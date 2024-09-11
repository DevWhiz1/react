import React, { useState } from 'react';

// The State component demonstrates the use of React's useState hook
const State = () => {
  // useState is a hook that allows you to add React state to function components.
  // we are using it to create two state variables: input and output.
  // input - stores the text entered by the user in the input field
  // output - stores the transformed (uppercase) version of the input
  const [input, setInput] = useState("");
  const [output, setOutput] = useState('');

  // handleOnChange is an event handler function that updates the state 'input'
  // whenever the user types into the input field. It captures the input field's
  // current value through the event object (e).
  const handleOnChange = (e) => {
    setInput(e.target.value); // Updates the 'input' state with the current value of the input field
  };

  // convertToUpperCase is a function that transforms the current 'input' value
  // to uppercase and updates the 'output' state with this uppercase string.
  const convertToUpperCase = () => {
    setOutput(input.toUpperCase()); // Converts the input text to uppercase and sets it to 'output'
  };

  return (
    <>
      <p>This is State</p>
      {/* Input field for entering text. Its value is controlled by the 'input' state.
          The 'onChange' event triggers the 'handleOnChange' function to update the state. */}
      <input 
        type='text'
        value={input} // Controlled input linked to the 'input' state
        onChange={handleOnChange} // Event handler for updating the input state on every keystroke
        placeholder='Enter Text Here' // Placeholder text for the input field
      />

      {/* Button to trigger the conversion of input text to uppercase */}
      <button onClick={convertToUpperCase}>Convert</button>

      {/* Displays the transformed uppercase text stored in 'output' */}
      <p>{output}</p>
    </>
  );
};

export default State;
