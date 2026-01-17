import { createContext, useEffect, useState } from "react";

interface UserContextType{
    username:string;
    email:string;
    userId:number;
    setUser(username:string,email:string,userId:number):void;
    logout:()=>void;
    isAuthenticated:boolean;
}

export const UserContext=createContext<UserContextType | null>(null)

export const UserProider=({children}:{children:ReactNode})=>{
  //login user's data
  //get local storage token
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [userId,setUserId]=useState<number>(0);
  const [isAuthenticated,setIsAuthenticated]=useState(false);
  
  useEffect(()=>{
    const token=localStorage.getItem("token"); //get token from local storage(login user)
    if(token){
      const decodedToken:any =jwtDecode(token);    //get token from local storage(login user)  
        setUsername(decodedToken.username);
        setEmail(decodedToken.email);
        setUserId(decodedToken.userId);
        setIsAuthenticated(true);
      }
  },[]);
  
  //edit user's data
const setUser=(username:string,email:string,userId:number)=>{
  setUsername(username); //popo=>"nono"
  setEmail(email);//"popo@gmail.com"=>"nono@gmail.com"
  setUserId(userId);//1=>2
};


//logout user
const logout=()=>{
  localStorage.removeItem("token");
  setUsername("");
  setEmail("");
  setUserId(0);
  setIsAuthenticated(false);
};

return(
  <UserContext.Provider value={{username,setUser,email,userId,logout,isAuthenticated}}>
    {children}
  </UserContext.Provider>
);
};

//custom hook
export const useUser=()=>{
  const context=UserContext(UserContext);
  if(!context){
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};




// export default function authloginContext() {
//   return (
//     <div>authloginContext</div>
//   )
// }
