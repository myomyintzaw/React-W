import type {BannerProps, } from "../type/type";
import Banner from "./Banner";


export default function Header() {


  const banner:BannerProps={
    title:"Welcome to Home Page",
    description:"Learning React is fun and easy",
    buttonText:"Get Started",
  }


  return (
    <header>
      <Banner banner={banner}/>
   
    </header>
  );
}
