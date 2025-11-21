import { Link, Outlet } from "react-router";
import type { NavLinkType } from "../type/type";

export default function Nav({ navLinks,}:{navLinks:NavLinkType[]} 
// {navLinks: { id: number; href: string; text: string }[];}
) {
  console.log("navLinks:", navLinks);
  return (
    <>
    <nav className="h-18 bg-gray-800 text-white flex items-center justify-center">

      <ul className="flex items-center justify-center">
        {navLinks.map((link) => (
          <li key={link.id} className="mr-4">
            <Link to={link.href}>{link.text}</Link>
          </li>
        ))}
  
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