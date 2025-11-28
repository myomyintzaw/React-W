import { useState } from "react"


export default function Usestate() {
    const data=useState(100);
    console.log("data",data[0]);
    
    const [username,setUsername]=useState("john doe");
    console.log("username before",username);

    // setUsername("rose");
    console.log("username after",username);

  return (
    <div>
      <h1>Usestate</h1> 
      <p>Current username is {username}</p> 
      <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={()=>setUsername("mg mg")}>change username</button>

    </div>
    
  )
}
