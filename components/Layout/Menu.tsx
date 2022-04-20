import Link from "next/link";
import { footer } from "../../data/footer"
import { navigation } from "../../data/navigation"
import { IntMenu } from "../../types/interface";
import { MenuFooterWrapper } from "./styles";
const Menu = ({isFooter}:IntMenu) => {
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
                <></>
            }
        </>
    )
}
export default Menu;