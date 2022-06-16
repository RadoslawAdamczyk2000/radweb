import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";
import Menu from "../Menu/Menu/Menu";
import Options from "../Options/Options/Options";
import { IntNavigation } from "./interface";
import { NavigationWrapper } from "./styles";
const Navigation = ({isHome}:IntNavigation) => {
    const [isScrolled,setScrolled] = useState(false);
    useEffect(() => {
        if(typeof window !== 'undefined'){
            window.addEventListener('scroll',() => { 
                if(window.scrollY > 50){
                    setScrolled(true);
                }else{
                    setScrolled(false);
                }
            })
        }
        console.log(isScrolled)
    },[isScrolled])
    return(
        <NavigationWrapper isHome={isHome} isScrolled={isScrolled}>
            <Brand/>
            <Menu/>
            <Options/>
        </NavigationWrapper>
    )
}
export default Navigation;