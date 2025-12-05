import { useState } from "react"
import type { User } from "../../type/type"



export default function Example1() {
    const [user,setUser]=useState<User>({
        id:1,
        username:"bobo",
        email:"bobo@example.com",
        password:"123456",
        age:18,
    })

    const updateUser=()=>{
        setUser({...user,username:"rose",email:"rose@example.com",age:20,password:"123ref"})
    }

  return (
    <div>
        <div className="card">
            <h2 className="text-2xl font-bold">{user.username}</h2>
            <p className="text-lg">{user.email}</p>
            <p className="text-lg">{user.password}</p>
            <p className="text-lg">{user.age}</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={updateUser}>Update user</button>
    </div>
  )
}
