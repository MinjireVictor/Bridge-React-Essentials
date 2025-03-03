import { useState, useEffect } from 'react'
import './App.css'
import UserDisplay from './UserDisplay';


function App() {

  const [count, setCount]=useState(0)
  console.log("STEP 1")

  const handleCountClick=()=>{
    let temp=count
    temp++
    setCount(temp)
  }


  useEffect(()=>{
    console.log("STEP 2")
  },[])

  return (
    <div className='w-full'>
      <>{console.log("STEP 3")}</>
      <p onClick={handleCountClick}>Click me </p> 
      <UserDisplay/>

    </div>
   
  )
}

export default App
