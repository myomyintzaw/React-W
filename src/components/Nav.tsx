import { Link, Outlet } from "react-router";
import type { NavLinkType } from "../type/type";
import { useTheme } from "./context/ThemeContext";
// import { useAuth } from "./context/AuthContext";
import { useUser } from "./context/authloginContext";

export default function Nav({ navLinks,}:{navLinks:NavLinkType[]} 
// {navLinks: { id: number; href: string; text: string }[];}
) {
  console.log("navLinks:", navLinks);

  const {theme,setTheme}=useTheme()
  // const {isAuthenticated,name,email,login,logout}=useAuth()
  const {email,username,logout}=useUser()

  return (
    <>
    <nav className="h-18 bg-gray-800 text-white flex items-center justify-center " 
    style={{backgroundColor:theme==="dark"?"black":"white",color:theme==="dark"?"white":"black",padding:"30px"}}>

      <ul className="flex items-center justify-center">
        {navLinks.map((link) => (
          <li key={link.id} className="mr-4">
            <Link to={link.href} style={{backgroundColor:theme==="dark"?"dark":"dark", color:theme==="dark"?"white":"green",padding:"30px"}}>{link.text}</Link>
          </li>
        ))}
  
  <button className=" text-amber-800" onClick={()=>theme==="dark" ? setTheme("light") : setTheme("dark")}>Change Theme</button>


     {/* ----------------- context folder/AuthContet.tsx -----------   */}
      {/* {isAuthenticated?(
        <>
        <span>Hello {name } </span>
        <span>Email {email}</span>
        <button onClick={()=>logout()}>Logout</button>
        </>
      ):(
        <button onClick={()=>login("bobo ","bobo@gmail.com")}>Login</button>
      )} */}
     {/* -----------------End  context folder/AuthContet.tsx -----------   */}

        {username && email ?(
          // className="text-white hover:text-gray-300 m-3 text-white"
        <div className={`m-2 font-bold hover:text-yellow-500 ${theme === "dark" ? " bg-gray-950 text-white" : " bg-white text-green-900" }`}>
         {username}
        
         {/* <button onClick={logout} className=" size-2.5 ml-4 text-white hover:text-gray-300 ">Logout</button> */}
         <button onClick={logout} className={` font-extrabold   p-3 hover:text-red-500 ${theme === "dark" ? "bg-gray-800 text-white" : "green-500 text-green-900" }`}>Logout</button>
        </div>
      ):(
        <>
        {/* <Link to="/login" className="text-white hover:text-gray-300 m-3" style={{backgroundColor:theme==="dark"?"dark":"dark", color:theme==="dark"?"white":"green",padding:"30px"}}>Login</Link> */}
         <Link to="/login" className={`m-3 p-3 text-white hover:text-gray-300 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-green-500 text-green-900" }`}>
  Login
</Link>
        <Link to="/register" className={`m-3 p-3 text-white hover:text-gray-300 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-green-500 text-green-900" }`}>Register</Link>
        </>
      )}

      </ul>
    </nav>
    <Outlet/>
    </>
  );
}





      {/* <li className="mr-4">
          <a href="/">Home</a>
        </li>
        <li className="mr-4">
          <a href="/about">About</a>
        </li>
        <li className="mr-4">
          <a href="/contact">Contact</a>
        </li> */}