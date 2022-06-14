import { useRouter } from "next/router";
import { menu } from "../../../../../data/menu";
import Item from "../Item/Item";
import Submenu from "../Submenu/Submenu";
import { IntMenuMap } from "./interface";
import {isLocaleAccepted} from '../../../../../lib/functions/isLocaleAccepted';
import { MenuWrapper } from "./styles";
const Menu = () => {
    const {locale} = useRouter();
    return(
        <MenuWrapper>
            {locale && isLocaleAccepted(locale) && menu[locale].map(({isExpand,path,title,submenu=[]}:IntMenuMap) => 
                <>
                    {
                        (isExpand && typeof submenu !== undefined) ?
                        <Submenu
                            handle={() => console.log('h')}
                            path={path}
                            submenu={submenu}
                            title={title}
                        /> 
                        :
                        <Item
                            isMain={true}
                            path={path}
                            title={title}
                            handle={() => console.log('h')}
                        />
                    }
                </>
            )}
        </MenuWrapper>
    )
}
export default Menu;