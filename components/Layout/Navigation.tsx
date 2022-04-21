import { useEffect, useState } from "react";
import { IntNavigation } from "../../types/interface";
import Brand from "./Brand";
import Menu from "./Menu";
import Options from "./Options";
import { NavDesktopWrapper, NavMobileWrapper } from "./styles";
const Navigation = ({theme,setTheme}:IntNavigation) => {
    const [menuButton,setMenuButton] = useState(false);
    const [menuOffer,setMenuOffer] = useState(false);
    const handleMenuButton = () => {
        setMenuButton(!menuButton);
        setMenuOffer(false);
    }
    const handleOffer = () => {
        setMenuOffer(!menuOffer)
    }
    const handleClose = () => {
        setMenuButton(false);
        setMenuOffer(false);
    }
    const [scrolled,setScrolled] = useState(false);
    const handleScroll = () => {
        window?.addEventListener('scroll', () => {
            if(window?.scrollY){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        })
    }
    useEffect(() => {
        handleScroll();
    },[])
    return(
        <>
            <NavDesktopWrapper scroll={scrolled}>
                <Brand/>
                <div>
                    <Menu isFooter={false}  handleOffer={() => handleOffer()} offer={menuOffer}/>
                    <Options
                        active={menuButton}
                        handleMenuButton={() => handleMenuButton()}
                        handleThemeButton={setTheme}
                        isLight={theme}
                    />
                </div>
            </NavDesktopWrapper>
            <NavMobileWrapper>
                <div className='top'>
                    <Brand/>
                    <Options
                        active={menuButton}
                        handleMenuButton={() => handleMenuButton()}
                        handleThemeButton={setTheme}
                        isLight={theme}
                    />
                </div>
                {menuButton &&
                    <div className='bottom'>
                        <Menu isFooter={false} handleClose={() => handleClose()} handleOffer={() => handleOffer()} offer={menuOffer}/>
                    </div>
                }
            </NavMobileWrapper>
        </>
    )
}
export default Navigation;