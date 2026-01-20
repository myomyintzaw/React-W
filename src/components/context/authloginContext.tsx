/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-refresh/only-export-components */
// import { createContext, useContext, useEffect, useState, type ReactNode,  } from "react";
// import { jwtDecode } from "jwt-decode";

// interface UserContextType{
//     username:string;
//     email:string;
//     userId:number;
//     setUser(username:string,email:string,userId:number):void;
//     logout:()=>void;
//     // isAuthenticated:boolean;
// }

// export const UserContext=createContext<UserContextType | null>(null);

// export const UserProvider=({children}:{children:ReactNode})=>{
//   //login user's data
//   //get local storage token
//   const [username,setUsername]=useState("");
//   const [email,setEmail]=useState("");
//   const [userId,setUserId]=useState<number>(0);
//   // const [isAuthenticated,setIsAuthenticated]=useState(false);
  
//   useEffect(()=>{
//     const token=localStorage.getItem("token"); //get token from local storage(login user)
//     if(token){
//       const decodedToken:any =jwtDecode(token);    //get token from local storage(login user)  
//         setUsername(decodedToken.username);
//         setEmail(decodedToken.email);
//         setUserId(decodedToken.userId);
//         // setIsAuthenticated(true);
//       }
//   },[]);
  
//   //edit user's data
// const setUser=(username:string,email:string,userId:number)=>{
//   setUsername(username); //popo=>"nono"
//   setEmail(email);//"popo@gmail.com"=>"nono@gmail.com"
//   setUserId(userId);//1=>2
// };


// //logout user
// const logout=()=>{
//   localStorage.removeItem("token");
//   setUsername("");
//   setEmail("");
//   setUserId(0);
//   // setIsAuthenticated(false);
// };

// return(
//   //,isAuthenticated
//   <UserContext.Provider value={{username,setUser,email,userId,logout}}>   
//     {children}
//   </UserContext.Provider>
// );
// };

// //custom hook
// // eslint-disable-next-line react-refresh/only-export-components
// export const useUser=()=>{
//   const context=useContext(UserContext);
//   if(!context){
//     throw new Error("useUser must be used within a UserProvider");
//   }
//   return context;
// };




// // export default function authloginContext() {
// //   return (
// //     <div>authloginContext</div>
// //   )
// // }



import { jwtDecode } from "jwt-decode";
import {
  createContext,
  useState,
  type ReactNode,
  useEffect,
  useContext,
} from "react";

interface UserContextType {
  username: string;
  email: string;
  userId: number;
  setUser(username: string, email: string, userId: number): void;
  logout: () => void;
}
export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  // login user's data
  // get local storage token
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    const token = localStorage.getItem("token"); // get token from local storage(login user)
    if (token && token.split(".").length === 3) {
      try {
        const decodedToken: any = jwtDecode(token);
        setUsername(decodedToken.username);
        setEmail(decodedToken.email);
        setUserId(decodedToken.userId);
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("token"); // Clean up invalid token
      }
    }
  }, []);


  // edit user's data
  const setUser = (username: string, email: string, userId: number) => {
    setUsername(username); //popo => "nono"
    setEmail(email); // "popo@gmail.com" => "nono@gmail.com"
    setUserId(userId); // 1 => 2
  };

  // logout user
  const logout = () => {
    localStorage.removeItem("token");
    setUsername("");
    setEmail("");
    setUserId(0);
  };

  return (
    <UserContext.Provider value={{ username, setUser, email, userId, logout }}>
      {children}
    </UserContext.Provider>
  );
};
//custom hook
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};