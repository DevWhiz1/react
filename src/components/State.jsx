import React,{useState} from 'react'

const State = () => {
const[input,setInput]=useState("");
const [output,setOutput]=useState('');

const handleOnChange=(e) => {
    setInput(e.target.value);
};
const convertToUpperCase=() => {
    setOutput(input.toUpperCase());
};
  return (
    <>
    <p>This is State </p>
    <input 
    type='text'
    value={input}
    onChange={handleOnChange}
    placeholder='Enter Text Here'>

    </input>
    <button onClick={convertToUpperCase}>Convert</button>
    <p>{output}</p>
    </>
  )
}

export default State