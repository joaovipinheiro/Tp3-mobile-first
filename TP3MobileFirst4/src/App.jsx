import { useState } from 'react'
import './App.css'
import './TextoEstilizado'
import TextoEstilizado from './TextoEstilizado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TextoEstilizado/>
    </>
  )
}

export default App
