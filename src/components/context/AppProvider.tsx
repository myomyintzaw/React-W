
import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./authloginContext";
import { NameProvider } from "./NameContext";
import { ThemeProvider } from "./ThemeContext";

const providers = [NameProvider, ThemeProvider,AuthProvider,UserProvider];

export default function AppProvider({children}:{children:React.ReactNode}) {
  return (
    <>
      {/* {providers.reduceRight((kids,Provider)=><Provider>{kids}</Provider>,<>{Children}</>)} */}


      {providers.reduceRight((acc, Provider) => {
        return (
        <Provider>{acc}</Provider>
        )
      }, children)}
    </>
  );
}
