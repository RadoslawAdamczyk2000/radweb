import { useContext, useEffect, useState } from "react"
import { Context, Provider } from "../../../../context/MenuContext"
import Brand from "../Brand/Brand"
import Menu from "../Menu/Menu/Menu"
import Options from "../Options/Options/Options"
import { IntNavigation } from "./interface"
import { NavigationWrapper } from "./styles"

const Navigation = ({isHome}:IntNavigation) => {
    const [isScrolled,setScrolled] = useState(false);
    
    useEffect(() => {
        if(typeof window !== undefined){
            window.addEventListener('scroll',() => {
                if(window.scrollY > 150){
                    setScrolled(true);
                    
                }else{
                    setScrolled(false);
                }
            })
        }
    },[isScrolled])
    return(
        <Provider>
            <NavigationWrapper 
                isHome={isHome} 
                isScroll={isScrolled}
            >
                <Brand/>
                <Menu/>
                <Options/>
            </NavigationWrapper>
        </Provider>
    )
}
export default Navigation;