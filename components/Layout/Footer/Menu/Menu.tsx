import Link from "next/link";
import { menu } from "../../../../data/menu";
const Menu = () => {
    return(
        <div>
            {menu.map(({path,title},key) => 
                <li key={key}>
                    <Link href={path}>
                        <a>
                            {title}
                        </a>
                    </Link>
                </li>
            )}
        </div>
    )
}
export default Menu;