import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
export const Context = createContext({
    close:() => {},
    isOpen:false,
    open:() => {},
})
export const Provider = ({children}:any) => {
    const [isLangMenu,setLangMenu] = useState(false);
    const closeHandle = () => {
        setLangMenu(false)
    }
    const openHandle = () => {
        setLangMenu(true);
    }
    return(
        <Context.Provider 
            value={{
                close:() => closeHandle(),
                isOpen:isLangMenu,
                open:() => openHandle(),
            }}
        >
            {children}
        </Context.Provider>
    )
}