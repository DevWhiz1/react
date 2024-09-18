import React from 'react'
import ChildComponent from './ChildComponent'
const Home = () => {
  return (
    <div>This is Home Page

      <ChildComponent homemessage="Message From Home"/>
    </div>
  )
}

export default Home