import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  
  //use state return an array containing a varibale and a funciton
  let [counter,setCounter] = useState(20)

  const addValue = ()=>{
    if (counter<30) 
    counter++;
    setCounter(counter)
  }

  const decrementValue = ()=>{
    if (counter>0) counter--;
    setCounter(counter)
  }

  return (
    <>
      <h1>Counter : {counter}</h1>
      <h2>Counter : {counter}</h2>
      <h3>Counter : {counter}</h3>
      <h4>Counter : {counter}</h4>
      <h5>Counter : {counter}</h5>

      <button onClick={addValue}>Click to increment</button>
      <br/>
      <button onClick={decrementValue}>Click to decrement</button>
    </>
  )
}

export default App
