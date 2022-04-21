import Link from "next/link";
import { footer } from "../../data/footer"
import { navigation } from "../../data/navigation"
import { IntMenu } from "../../types/interface";
import MenuItem from "./MenuItem";
import Submenu from './Submenu';
import { MenuFooterWrapper } from "./styles";
const Menu = ({isFooter,handleClose,handleOffer,offer}:IntMenu) => {
    const {title,email,phone} = footer.pl.contact;
    const {menu,blog,offers} = navigation.pl;
    return(
        <>
            {
                isFooter ? 
                <MenuFooterWrapper>
                    <div>
                        <h4>{title}</h4>
                        <address>
                            <Link href={email.href}>
                                <a>
                                    {email.name}
                                </a>
                            </Link> 
                            <Link href={phone.href}>
                                <a>
                                    {phone.name}
                                </a>
                            </Link> 
                        </address>
                    </div>
                    <div>
                        <h4>Menu</h4>
                        <menu>
                            {menu.map(({path,title},key) =>
                                <li key={key}>
                                    <Link href={path}>
                                        <a>
                                            {title}
                                        </a>
                                    </Link>
                                </li>
                            )}
                        </menu>
                    </div>
                </MenuFooterWrapper> :
                <menu>
                    <MenuItem isExpand={false} handle={handleClose} isMain={true} isSubmenu={false} path={menu[0].path} title={menu[0].title} />
                    <MenuItem isExpand={false} handle={handleClose} isMain={true} isSubmenu={false} path={menu[1].path} title={menu[1].title} />
                    <MenuItem isExpand={false} handle={handleClose} isMain={true} isSubmenu={false} path={menu[2].path} title={menu[2].title} />
                    <MenuItem isExpand={false} handle={handleClose} isMain={true} isSubmenu={false} path={menu[3].path} title={menu[3].title} />
                    <Submenu path={menu[4].path} title={menu[4].title} handle={handleOffer} cards={offer}>
                        {offers.map(({path,title},key) =>
                            <MenuItem isExpand={false} isMain={false} isSubmenu={true} path={path} title={title} key={key} handle={handleClose}/>
                        )}
                    </Submenu>
                    <MenuItem isExpand={false} isMain={true} isSubmenu={false} path={menu[5].path} title={menu[5].title} handle={handleClose}/>
                    <MenuItem isExpand={false} isMain={true} isSubmenu={false} path={menu[6].path} title={menu[6].title} handle={handleClose}/>
                </menu>
            }
        </>
    )
}
export default Menu;