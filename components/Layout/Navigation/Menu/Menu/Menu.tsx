import { useRouter } from "next/router";
import { menu } from "../../../../../data/menu";
import Item from "../Item/Item";
import Submenu from "../Submenu/Submenu";
import { IntMenuMap } from "./interface";

const Menu = () => {
    const {locale,locales} = useRouter();
    return(
        <menu>
            <h1>{locale}</h1>
            {(locale !== undefined) && menu[locale].map(({isExpand,path,title,submenu=[]}:IntMenuMap) => 
                <>
                    {console.log(typeof locale)}
                    {
                        (isExpand && typeof submenu !== undefined) ?
                        <Submenu
                            handle={() => console.log('h')}
                            handleExpand={() => console.log('e')}
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
        </menu>
    )
}
export default Menu;