import { useRouter } from "next/router";
import { menu } from "../../../../../data/menu";
import Item from "../Item/Item";
import Submenu from "../Submenu/Submenu";
import { IntMenuMap } from "./interface";
import {isLocaleAccepted} from '../../../../../lib/functions/isLocaleAccepted';
import { MenuWrapper } from "./styles";
import { MenuContext } from "../../../../../context/MenuContext";
import { useContext } from "react";
import { AnimatePresence } from "framer-motion";
const Menu = () => {
    const {locale} = useRouter();
    const {isOpen,close} = useContext(MenuContext);
    return(
        <>
            {
                isOpen &&
                <AnimatePresence
                    initial={{opacity:0,visibility:'hidden'}}
                    animate={{opacity:1,visibility:'visible'}}
                    exit={{opacity:0,visibility:'hidden'}}
                >
                    <MenuWrapper>
                        {locale && isLocaleAccepted(locale) && menu[locale].map(({isExpand,path,title,submenu=[]}:IntMenuMap) => 
                            <>
                                {
                                    (isExpand && typeof submenu !== undefined) ?
                                    <Submenu
                                        handle={() => close()}
                                        path={path}
                                        submenu={submenu}
                                        title={title}
                                    /> 
                                    :
                                    <Item
                                        isMain={true}
                                        path={path}
                                        title={title}
                                        handle={() => close()}
                                    />
                                }
                            </>
                        )}
                    </MenuWrapper>
                </AnimatePresence>
            }
        </>
    )
}
export default Menu;