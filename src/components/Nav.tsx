import { Link, Outlet } from "react-router";
import type { NavLinkType } from "../type/type";
import { useTheme } from "./context/ThemeContext";
import { useAuth } from "./context/AuthContext";

export default function Nav({ navLinks,}:{navLinks:NavLinkType[]} 
// {navLinks: { id: number; href: string; text: string }[];}
) {
  console.log("navLinks:", navLinks);

  const {theme,setTheme}=useTheme()
  const {isAuthenticated,name,email,login,logout}=useAuth()

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
      {isAuthenticated?(
        <>
        <span>Hello {name } </span>
        <span>Email {email}</span>
        <button onClick={()=>logout()}>Logout</button>
        </>
      ):(
        <button onClick={()=>login("bobo ","bobo@gmail.com")}>Login</button>
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