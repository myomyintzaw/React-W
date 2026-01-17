/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";



interface AuthContextType{
    name:string;
    email:string;
    setName:(name:string)=>void;
    setEmail:(email:string)=>void;
    login:(name:string,email:string)=>void;
    logout:()=>void;
    isAuthenticated:boolean;
}
const AuthContext=createContext<AuthContextType | null>(null)



export const AuthProvider=({children}:{children:React.ReactNode})=>{
    const [name,setName]=useState<string>("")
    const [email,setEmail]=useState<string>("")
    const [isAuthenticated,setIsAuthenticated]=useState<boolean>(false)

    const login=(name:string,email:string)=>{
        setIsAuthenticated(true)
        setName(name)
        setEmail(email)
    }

    const logout=()=>{
        setIsAuthenticated(false)
        setName("")
        setEmail("")
    }

    return(
        <AuthContext.Provider value={{name,email,setName,setEmail,login,logout,isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth=()=>{
    const context=useContext(AuthContext)
    if(!context){
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}