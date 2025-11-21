import { Route, Routes } from "react-router";
import Nav from "./components/Nav";
import Home from "./page/Home";
import type { NavLinkType } from "./type/type";
import About from "./page/About";
import Blog from "./page/Blog";
import Service from "./page/Service";
import Hook from "./page/Hook";
import PageNotFound from "./page/404";
import Dashboard from "./page/Dashboard";
import Login from "./page/Login";

export default function App() {
  const navLinks: NavLinkType[] = [
    { id: 1, href: "/", text: "Home" },
    { id: 2, href: "/about", text: "About" },
    { id: 3, href: "/service", text: "Service" },
    { id: 4, href: "/blog", text: "Blog" },
    { id: 5, href: "/hook", text: "Hook" },
    { id: 6, href: "/login", text: "Login" },
  ];
  return (
    <>
    <Routes>
        <Route path="/" element={<Nav navLinks={navLinks}/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="hook" element={<Hook/>}/>
        <Route path="admin" element={<Dashboard/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="login" element={<Login/>}/>

       
        </Route>
    </Routes>


      {/* <Nav navLinks={navLinks} /> */}

    
     
    </>
  );
}
