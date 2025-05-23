import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
const [jokes, setjokes] = useState([])

useEffect(() =>{
  axios.get('/api/jokes')
  .then((response) =>{
    setjokes(response.data)
    // console.log(response)
    // console.log(response.data)
  })
  .catch((error) => {
    console.log(error)
  })
},[])
  return (
    <>
      <h1>express and react full stack</h1>
      <p>JOKES : {jokes.length}</p>

     {jokes.map((joke)=>(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
     ))}
    </>
  )
}

export default App
