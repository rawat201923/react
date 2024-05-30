import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  // let myObj = {
  //   username: "histesh",
  //   age:21
  // }
  // let myArr = [1,2,3,4,6]


  return (
    <>
            <h1 className='bg-green-400 text-black p-4 rounded-xl' >welcom to Tailwind</h1>
           <Card username="Chaiaurcode" btnText="click me"/>
           <Card username="Hitesh" />
           
    </>
   
  )
}

export default App;
