/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/set-state-in-effect */
import { createContext, useContext, useEffect, useState } from "react";

interface NameContextType {
  name: string;
  setName: (name: string) => void;
}

const NameContext = createContext<NameContextType | null>(null);

export const NameProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState<string>("bobo");
  useEffect(() => {
    setName((prev) => prev === "bobo" ? "John Done" : "bobo")
  }, [])

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};

//custom hooks(function name must start with use)
// eslint-disable-next-line react-refresh/only-export-components
//custom hook 
export const useName = () => {
  const context = useContext(NameContext);
  if (!context) {
    throw new Error("useName must be used within a NameProvider");
  }
  return context;
};




//It only to knowladge about userLists random only export show /  custom hook 
export const useHello=()=>{
  const userLists=['bobo','jake','jane']
  const randomUser=userLists[Math.floor(Math.random() * userLists.length)]
  return "Hello"+randomUser;
}
