import { useState } from 'react'
import './App.css'

function App() {
 let [counter, setCounter] = useState(0)
 
  // let counter = 15
/*
## interview question on counter

  const addValue = () => {
   
    counter = counter + 1;
    setCounter((prevCounter)=> prevcounter+1);
    setCounter((prevCounter)=> prevcounter+1);
    setCounter((prevCounter)=> prevcounter+1);
    setCounter((prevCounter)=> prevcounter+1);
            
   
  }


*/



  const addValue = () => {
    console.log("clicked", counter);
  
    if (counter < 20) { // Check if counter is less than 20
      counter = counter + 1;
      setCounter(counter);
    } else {
      console.log("Counter has reached the maximum value of 20");
    }
  }
  

  const removeValue = () => {
    console.log("clicked", counter);
  
    if (counter > 0) { // Check if counter is less than 20
      counter = counter - 1;
      setCounter(counter);
    } else {
      console.log("Counter has reached the minimum value of 0");
    }
  }
  return (
    <>
    <h1>chai aur code</h1>
    <h2>Counter value:  {counter}</h2>

    <button 
    onClick={addValue}>Add value </button>
    <br/>
    <button
    onClick={removeValue}>Remove value </button>
    </>
  )
} 

export default App
