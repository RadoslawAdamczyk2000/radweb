import { createContext, useEffect, useState } from "react";
export const MenuContext = createContext({
    isOpen:false,
    close:()=>{},
    toggleOpen:()=>{}
})
export const MenuProvider = ({children}:{children:any}) => {
    const [isOpen,toggleOpen] = useState(true);
    const toggle = () => {
        if(typeof window !== undefined){
            if(window.innerWidth <= 840){
                toggleOpen(!isOpen);
            }else{
                toggleOpen(true);
            }
        }
    }
    return(
        <MenuContext.Provider
            value={{
                isOpen:isOpen,
                close:() => toggleOpen(false),
                toggleOpen:() => toggle()
            }}
        >
            {children}
        </MenuContext.Provider>
    )
}