import { useState } from 'react'
import './App.css'

function App() {
  console.log('app rendered',Math.random())
  const [value, setValue] = useState({
    value :0,
  })
  //const [multiplyvalue, setmultiplyvalue] = useState(1)

  // const multiplyvalue = value*5

  // function multiply(){
  //   setValue(value +1);
  // }
  function clickMe(){
    //console.log(`logged`)
    setValue({
      value : 0,
    })
  }
  return (
    <>
      <h1>Couter : {value.value}</h1>
      <button
      onClick={clickMe}>multiplied by 5
      </button>
      {/* <h2>multiplied value : {multiplyvalue}</h2> */}
    </>
  )
}

export default App
