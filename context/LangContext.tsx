import { createContext, useEffect, useState } from "react";

export const Context = createContext({
    close:() => {},
    isOpen:false,
    open:() => {},
})
export const Provider = ({children}:any) => {
    const [isLangMenu,setLangMenu] = useState(true);
    const closeHandle = () => {
        setLangMenu(false)
    }
    const openHandle = () => {
        setLangMenu(true);
    }
    useEffect(() => {
        console.log(isLangMenu)
    },[isLangMenu])
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