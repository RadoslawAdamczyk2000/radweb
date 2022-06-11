import { createContext, useEffect, useState } from "react";
import {IntMenuContext} from './interface';
export const Context = createContext({
    isActive:false,
    handle:() => {},
})
export const Provider = ({children}:IntMenuContext) => {
    const [isActive,setActive]  = useState(false);
    const handleMenuButton = async () => {
        if(typeof window !== undefined){
            if(window.innerWidth > 900){
                setActive(true);
            }else{
                setActive(!isActive);
            }
        }
    }
    useEffect(() => {
        if(typeof window !== undefined){
            if(window.innerWidth > 900){
                setActive(true);
            }
        }
    },[])
    return(
        <Context.Provider value={{
            isActive:isActive,
            handle:() => handleMenuButton(),
        }}>
            {children}
        </Context.Provider>
    )
}