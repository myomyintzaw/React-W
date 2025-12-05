import { useState } from "react";
import type { User } from "../../type/type";


export default function EXample_Array() {
    // const [user,setUser]=useState<User | null> (null)
    const[loading,setLoading]=useState<boolean>(true)

    const[users,setUsers]=useState<User[] | null>(
        [
            {
                id:1,
                username:"bobo",
                email:"bobo@example.com",
                password:"123456",
                age:18,
            },
            {
                id:2,
                username:"Ieii",
                email:"iuue@example.com",
                password:"8438",
                age:49,
            },
            {
                id:3,
                username:"Ieiie",
                email:"iuueew@example.com",
                password:"8949iio438",
                age:59,
            },
             {
                id:4,
                username:"Ieiiewe",
                email:"iurueew@example.com",
                password:"et8949iio438",
                age:29,
            },
             {
                id:5,
                username:"Ieiikde",
                email:"iuueteew@example.com",
                password:"89op49iio438",
                age:59,
            },
        
        ]
    );

    const updateUser=()=>{
        setUsers([...(users || []),{id:7,username:"ose",email:"rose@example.com"}])
    }

  return (
    <div>
        <div className='md:grid grid-cols-3 p-10'>
            {
                loading && <p className="text-2xl font-bold text-center">Loading...</p>
            }
            {
               !loading ? (users && users.length > 0 ?(
                    users?.map((item)=>(
                        <div key={item.id} className='card col-span-1 m-3 p-5 shadow shadow-zinc-300 rounded-3xl 
                        hover:shadow-zinc-600  hover:shadow-lg transition-all duration-300'>
                            <h1 className="text-1xl font-bold">{item.id}</h1>
                            <h2 className='text-2xl font-bold'>{item.username}</h2>
                            <p className='text-lg'>{item.email}</p>
                            <p className='text-lg'>{item.age}</p>
                        </div>    
                    ))
                ):(
                    <p className='text-2xl font-bold text-center'>No user found</p>
                )):null
            }
        </div>
        <button className="bg-yellow-400 text-white px-4 py-2 rounded-md m-3.5" onClick={()=>setLoading(false)}>Load users</button>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={updateUser}>Update user in Array</button>

    </div>
  )
}
