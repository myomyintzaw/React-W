import type {BannerProps, } from "../type/type";
import Banner from "./Banner";
import { useName } from "./context/NameContext";
// import { useTheme } from "./context/ThemeContext";


export default function Header() {


  const banner:BannerProps={
    title:"Welcome to Home Page",
    description:"Learning React is fun and easy",
    buttonText:"Get Started",
  }

    const {name,setName} = useName();
    // const {theme,setTheme}=useTheme();

  return (
    <header>
      < Banner banner={banner}/>

       Home Page <b>{name}</b>
    <button className=" text-green-500" onClick={()=>setName(name==="John Done"?"bobo":"John Done")}>Change Name</button>
    </header>
  );
}
