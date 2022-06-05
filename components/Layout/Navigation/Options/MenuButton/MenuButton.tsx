import { useContext, useEffect, useState } from "react";
import { Context } from "../../../../../context/MenuContext";
import { MenuButtonWrapper } from "./styles";
const MenuButton = () => {
    const { isActive, handle } = useContext(Context);
    const [isMobile,setMobile] = useState(false);
    const handleDevice = async () => {
        if(typeof window !== undefined){
            if(window.innerWidth > 900){
                setMobile(false);
            }else{
                setMobile(true);
            }
        }
    }
    useEffect(() => {
        handleDevice();
    },[])
    console.log(isActive);
    return(
        <>
            {
                isMobile &&
                <MenuButtonWrapper 
                    isActive={isActive} 
                    onClick={handle}
                >
                    <span/>
                    <span/>
                </MenuButtonWrapper>
            }
            
        </>
    )
}
export default MenuButton;