import { createContext, useState } from "react";
import { IntLangProvider } from "./interface";
export const LangContext = createContext({
    isOpen:false,
    close:()=>{},
    open:()=>{}
})
export const LangProvider = ({children}:IntLangProvider) => {
    const [isOpen,setOpen] = useState(false);
    return(
        <LangContext.Provider 
            value={{
                isOpen:isOpen,
                close:() => setOpen(false),
                open:() => setOpen(true)
            }}
        >
            {children}
        </LangContext.Provider>
    )
}
