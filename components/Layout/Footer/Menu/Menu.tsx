import Link from "next/link";
import { menu } from "../../../../data/menu";
import { MenuWrapper } from "./styles";
const Menu = () => {
    return(
        <MenuWrapper>
            {menu.map(({path,title},key) => 
                <li key={key}>
                    <Link href={path}>
                        <a>
                            <p>
                                {title}
                            </p>
                        </a>
                    </Link>
                </li>
            )}
        </MenuWrapper>
    )
}
export default Menu;