import React from 'react'
import ChildComponent from './ChildComponent';

const Footer = () => {
  return (
    <div>Footer
     <ChildComponent message="Hello from parent component"/>
    </div>
  )
}

export default Footer