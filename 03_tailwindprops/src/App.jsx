import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() { 
  const [color, setColor] = useState("olive")
 
  // let myObj = {
  //   username: "histesh",
  //   age:21
  // }
  // let myArr = [1,2,3,4,6]


  return (
    <>
            <h1 className='bg-green-400 text-black p-4 rounded-xl' >welcome to Tailwind</h1>
           <Card username="Chaiaurcode" btnText="click me"/>
           <Card username="Hitesh" />
           <h1>bg changer</h1>
           <div className='w-100 h-screen duration-200'
            style={{backgroundColor: color }}>
                <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                  <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                    <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg-2' style={{backgroundColor: "red"}}>Red</button>
                    <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg-2' style={{backgroundColor: "green"}}>Green</button>
                    <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg-2' style={{backgroundColor: "blue"}}>Blue</button>
                    <button onClick={()=>setColor("gray")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg-2' style={{backgroundColor: "gray"}}>gray</button>
                    <button onClick={()=>setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg-2' style={{backgroundColor: "black"}}>Black</button>
                    <button onClick={()=>setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg-2' style={{backgroundColor: "orange"}}>Orange</button>
                    <button onClick={()=>setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg-2' style={{backgroundColor: "purple"}}>Purple</button>
                    <button onClick={()=>setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg-2' style={{backgroundColor: "pink"}}>Pink</button>
                    <button onClick={()=>setColor("brown")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg-2' style={{backgroundColor: "brown"}}>brown</button>

                  </div>
               
                </div>
            </div>
    </>
   
  )
}

export default App;
