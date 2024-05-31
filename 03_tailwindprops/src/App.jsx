import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'
import Card from './components/Card'


function App() { 
  //state 
  const [color, setColor] = useState("olive")
///////////
// ****************code for password generator*****************
 ////////// select variables  

const[length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const[charAllowed, setCharAllowed]= useState(false)
  const[password, setPassword]= useState("")

  //useRef hook
  const passwordRef = useRef(null)

  //const passwordGenerator = useCallback(fn,[])

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*())_+{}[]~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() *str.length +1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])


  //useRef hook
  const copyPasswordToClipboard = useCallback(()=> {
    passwordRef.current?.select();  //for represent blue color on select text
   // passwordRef.current?.setSelectionRange(0,3); //for represent blue color on select text with limited value
    window.navigator.clipboard.writeText(password)
    //code to copy text in clipboard
  }, 
  [password])

  //   useeffect hook  -----------------------
  useEffect(()=>{

    passwordGenerator()
  },
   [length,numberAllowed,charAllowed,passwordGenerator])

 //   useeffect hook end -----------------------

 // ****************code for password generator  end*****************


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
                <div className="flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
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
            <hr/>
            <h1>Use Effect , useRef and use Callback</h1>
          <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
           <h2 className="text-white text-center">Password generator</h2>
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
              <input className='outline-none w-full py-1 px-3' 
              placeholder='Password' 
               type="text" 
               value={password}
               readOnly
               ref={passwordRef}
               />
               <button 
               onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
                Copy
               </button>
            </div>

            <div className="flex text-sm gap-x-2">
              <div className="flex items-center gap-x-1">
                <input type="range"
                min={6} 
                value={length}
                className='cursor-pointer'
                onChange={(e) => {
                  setLength(e.target.value)
                }} />
                <label >Length:{length}</label>

              </div>
              <div className="flex items-center gap-x-1">
                <input type="checkbox"
               defaultChecked={numberAllowed}
               id="numberInput"
                onChange={(e) => {
                 setNumberAllowed((prev)=> !prev);
                }} />
                <label >Numbers</label>
                
              </div>
              <div className="flex items-center gap-x-1">
                <input type="checkbox"
               defaultChecked={charAllowed}
               id="characterInput"
                onChange={(e) => {
                 setCharAllowed((prev)=> !prev);
                }} />
                <label >Characters</label>
                
              </div>
            </div>

          </div>
            
    </>
   
  )
}

export default App;
