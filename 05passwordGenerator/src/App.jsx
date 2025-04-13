import React, { useState, useCallback , useEffect , useRef } from 'react'

export default function App() {

  const [length , setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password , setPassword] = useState("")
  // ref Hook
  const passwordRef = useRef(null)
const passwordGenerator = useCallback(() =>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed){
    str += "0123456789"
  }
  if(charAllowed){
    str += "!@#$%^&*()_+~`|}{[]\:;?><,./-="
  }
  for(let i = 1; i <= length; i++){
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }

  setPassword(pass)
} , [length, numberAllowed, charAllowed , setPassword])
  

useEffect(() => {
  passwordGenerator()
} , [length, numberAllowed, charAllowed, passwordGenerator])

const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0, 100)
  window.navigator.clipboard.writeText(password)
}, [password])
  return (
    <div className=  " center w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
      <h1 className='text-white text-center my-3 p-4'> Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 p-4">
        <input 
            type="text"
            value={password}
            className="w-full py-2 px-4 text-gray-900 bg-gray-50 outline-none"
            placeholder='Password'
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-npne bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>

      </div>
      <div className="flex text-sm gap-x-2"></div>
      <div className="flex items-center gap-x-1">
        <input 
        type="range"
        min={8}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label >Length : {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
        type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={() => setNumberAllowed((prev) => !prev)}
        />
        <label htmlFor='numberInput'>Numbers</label>

    </div>
      <div className="flex items-center gap-x-1">
        <input
        type="checkbox"
        defaultChecked={charAllowed}
        id="numberInput"
        onChange={() => setCharAllowed((prev) => !prev)}
        />
        <label htmlFor='characterInput'>Characters</label>

    </div>
    </div>
  
  )
}