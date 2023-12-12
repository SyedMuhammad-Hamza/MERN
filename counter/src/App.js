import React, { useEffect, useState } from "react";
import './App.css';
import { isDisabled } from "@testing-library/user-event/dist/utils";

function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(null);
  const [isDisabled, setisDisabled] =useState(false);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
 const  reset = async() =>{
  try {
    setCounter(0);
   setisDisabled(true);
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json());
    setisDisabled(false);
    setData(res);
  } catch (error) {
    console.log(error);
  }
  };

  const func = async() =>{
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/2').then(response => response.json());
      setData2(res);
    } catch (error) {
      console.log(error);
    }

  }

  const func1 = async(id) =>{
    try {
  
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id).then(response => response.json());
      setData3(res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    if(counter>0)
    func1(counter);
  },[counter])  
  

useEffect(()=>{
  func();
},[])  

useEffect(()=>{
  console.log('12345');
})

  return (
   <>
   <h1>Counter Value: </h1>
   <h2>{counter}</h2>
    <button onClick={()=>setCounter(counter+1)}>Add</button>
    <button onClick={()=>setCounter(counter-1)}>Minus</button>
    <button disabled={isDisabled} onClick={()=>reset()}>Reset</button>
    <h1>Upon counter increament</h1>
    {data3 ? <div>{JSON.stringify(data3)}</div> : <div>Loading...</div>}
    {data ? <div>{JSON.stringify(data)}</div> : <div>Loading...</div>}
    <h1>Second value</h1>
    {data2 ? <div>{JSON.stringify(data2)}</div> : <div>Loading...</div>}
   </>
  );
}

export default App;
