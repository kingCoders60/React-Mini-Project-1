import React,{useState} from 'react'

const App = () => {
  const [a,setA]=useState();
  let Increment = () =>{
    setA(a+1);
  }
  
  let Reset = ()=>{
    setA(0);
  }

  let Decrement = ()=>{
    setA(a-1);
  }

  return (
    <div>
      <h1>The value of {a}</h1>
      <button onClick={Increment}>Increase</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default App
