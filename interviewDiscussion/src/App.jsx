import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
  //const [multiplyvalue, setmultiplyvalue] = useState(1)

  const multiplyvalue = value*5

  function multiply(){
    setValue(value +1);
  }
  return (
    <>
      <h1>Couter : {value}</h1>
      <button
      onClick={multiply}>multiplied by 5
      </button>
      <h2>multiplied value : {multiplyvalue}</h2>
    </>
  )
}

export default App
