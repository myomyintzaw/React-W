// import { useState } from "react"
import Counter from "../../components/useState/Counter"
import Example1 from "../../components/useState/Example1obj"
import EXample_Array from "../../components/useState/EXample_Array"



export default function Usestate() {
    // const data=useState<number>(100);
    // console.log("data",data[0]);
    
    // const [username,setUsername]=useState<string>("john doe");
    // console.log("username before",username);

    // setUsername("rose");
    // console.log("username after",username);

  return (
    <div>
      <h1>Usestate</h1> 
      {/* <p>Current username is {username}</p>  */}
      {/* <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={()=>setUsername("mg mg")}>change username</button> */}
     <Counter/>
     <Example1/>
     <EXample_Array/>
    </div>
    
  )
}
