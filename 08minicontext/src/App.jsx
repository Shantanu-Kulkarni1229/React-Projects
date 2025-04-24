import { useState } from 'react'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1 className="text-3xl font-bold underline">
        Hello world! 
        </h1>
    </UserContextProvider>
  )
}

export default App
