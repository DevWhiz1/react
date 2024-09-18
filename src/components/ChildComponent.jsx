import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>ChildComponent 
        <p>{props.message}</p>
        <h3>{props.homemessage}</h3>
    </div>
  )
}

export default ChildComponent;