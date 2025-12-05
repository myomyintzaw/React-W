import { useState } from "react";


export default function Counter() {
    const [count,setCount]=useState<number>(0);

    const Increase=()=>{
        setCount((prevCount)=>prevCount+1);
        setCount((prevCount)=>prevCount +1);
    }
    
    const Decrease=()=>{
        setCount((prevCount)=>prevCount-1);
        setCount((prevCount)=>prevCount-1);
    }
  return (
    <div>
        <p>current cunt is {count}</p>
        <button  className='bg-red-500 text-white px-4 py-2 rounded-md' onClick={Increase}>Add count</button>
        <button className='bg-green-500 text-white px-4 py-2 rounded-md' onClick={Decrease}>Decrease count</button>
    </div>
  )
}
