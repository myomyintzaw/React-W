import { createContext,useContext,useState } from "react";


interface ThemeContextType{
    theme:string;
    setTheme:(theme:string)=>void;
}


const ThemeContext=createContext<ThemeContextType | null>(null)

export const ThemeProvider=({children}:{children:React.ReactNode})=>{
    const [theme,setTheme]=useState<string>("dark")

    return(
    <ThemeContext.Provider value={{theme,setTheme}}>
        {children}
    </ThemeContext.Provider>
)
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme=()=>{
    const context=useContext(ThemeContext)
    if(!context){
        throw new Error("useTheme must be used within a ThemeProvider")
    }
return context
}