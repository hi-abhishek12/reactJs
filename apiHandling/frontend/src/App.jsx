import { useEffect, useState } from 'react'
import './App.css'
import axios, { isCancel } from 'axios'


function App() {
  //const [products , error , loading] = customReactQuery('/api/products')

  const [products, setproducts] = useState([])
  const [error , setError] = useState(false)
  const [loading , setLoading] = useState(false)
  const [search , setSearch] = useState('')

  useEffect(() =>{
    const controller = new AbortController()
    ;(async() =>{
    try {
       setError(false);
       setLoading(true)
       const response = await axios.get('/api/products?search='+search , {
        signal : controller.signal
       });
       console.log(response.data);
       setproducts(response.data)
       setLoading(false);
    } catch (error) {
      if(axios.isCancel(error)){
        console.log(`axios is cancel`);
      }
      setError(true)
      setLoading(false)
    }
    })()
    return () =>{
      controller.abort();
    }
  },[search])


  // if(error){
  //   return <h1>Something Went Wrong!</h1>
  // }
  // if(loading){
  //   return <h1>Loading...</h1>
  // }

  return (
    <>
     <h1>Api handling</h1>
     {loading && (<h1>Loading...</h1>)}
     {error && (<h1>Something Went Wrong!</h1>)}

      <input type="search"placeholder='search' 
      value={search} onChange={(event) => setSearch(event.target.value)}
       />
     <h2>Number of Products : {products.length}</h2>
    </>
  )
}

export default App

// const customReactQuery = (pathUrl) =>{
 

//   return [products , error , loading]
// }
