import {createContext,useContext,useState} from "react"

const themeContext=createContext({})
 const useTheme=()=>{
    return  useContext(themeContext)
}
const ThemeContextProvider = ({children}:{children:React.ReactNode}) => {
    const [color,setColor]=useState<"light"|"dark">("light")
    // setColor('')
  return (
    <themeContext.Provider value={{color,setColor,useTheme}}>
        {children}
    </themeContext.Provider>
  )
}

export default ThemeContextProvider