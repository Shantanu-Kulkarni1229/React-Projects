import { useState } from "react"

function App() {
  let [counter, setCounter] = useState(15)

const addValue = () => {
  console.log("Value Added" , counter);
  counter = counter + 1
  if(counter > 20){
    alert("Value cannot be greater than 20")
  }else{
    setCounter(counter)
  }
}

const removeValue = () => {
  console.log("Value Removed" , counter);
  counter = counter - 1
  if(counter < 0){
    alert("Value cannot be negative ")
  }else{
    setCounter(counter)
  }
}

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value : {counter} </h2>
      <button
      onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <br />
      <p>footer {counter}  </p>
    </>
  )
}

export default App
