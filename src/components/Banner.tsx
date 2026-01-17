import type { BannerProps } from "../type/type";
import Button from "./Button";
import { useTheme } from "./context/ThemeContext";

export default function Banner({ banner }: { banner: BannerProps }) {
  const {theme,setTheme}=useTheme()
  return (
    <div className=" h-[400px] flex items-center justify-center flex-col text-center" style={{backgroundColor:theme==="dark"?"red":"white"}}>
      <h1 className="text-4xl font-bold mb-4" style={{color:theme==="dark"?"white":"black"}}>{banner.title}</h1>
      <p className="text-lg">{banner.description}</p>
      <Button bgColor="bg-green-500" buttonText={banner.buttonText}/>
      <Button buttonText={"Click Here"}/>
      <Button bgColor="bg-red-700" textColor="text-green-300" buttonText={"Delete"}/>
      <button className="text-cyan-600" onClick={()=>theme==="dark"?setTheme("light"):setTheme("dark")}>Change Theme</button>

    </div>
  );
}
