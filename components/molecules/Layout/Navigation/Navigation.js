import Brand from "../../../atoms/Layout/Navigation/Brand";
import Menu from "../../../cells/Layout/Navigation/Menu";
import Options from "../../../bacterias/Layout/Navigation/Options";
import { NavigationWrapper } from "./styles/NavigationWrapper";
import { useEffect, useState } from "react";
// interface i {
//     changeTheme : any
// }
const Navigation = ({changeTheme}) => {
    const [isBlog,setBlog] = useState(false);
    const [isOffer,setOffer] = useState(false);
    const [openMenu,setOpenMenu] = useState(false);
    const [windowMenu,setWindowMenu] = useState(false);
    const handleMenu = () => {
        setBlog(false);
        setOffer(false);
        setOpenMenu(!openMenu)
    }
    const handleBlog = () => {
        setBlog(!isBlog);
        setOffer(false);
    }
    const handleOffer = () => {
        setBlog(false);
        setOffer(!isOffer);
    }

    const handleNav = () => {
        setBlog(false);
        setOffer(false);
    }
    const checkWidth = () => {
        if(window.innerWidth <= 980){
            setWindowMenu(false);
        }else{
            setWindowMenu(true);
        }
    }
    const [isScroll,setScroll] = useState(false);
    const currentPosY = () => {
        window?.addEventListener('scroll', () => {
            if(window?.scrollY){
                setScroll(true)
            }else{
                setScroll(false)
            }
        })
    }
    useEffect(() => {
        currentPosY();
        checkWidth();
    })
    return(
        <NavigationWrapper scrolled={isScroll} onMouseLeave={() => handleNav()}>
            <Brand/>
            {
                windowMenu ?
                <Menu
                    blogValue={isBlog}
                    blogAction={() =>  handleBlog()}
                    offerValue={isOffer}
                    offerAction={() => handleOffer()}
                /> :
                (
                    openMenu &&
                    <Menu
                        blogValue={isBlog}
                        blogAction={() =>  handleBlog()}
                        offerValue={isOffer}
                        offerAction={() => handleOffer()}
                    />
                )
                
            }
            <Options changeTheme={changeTheme} handleMenu={handleMenu}/>
        </NavigationWrapper>
    )
}
export default Navigation;