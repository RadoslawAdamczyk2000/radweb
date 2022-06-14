import { menuLang } from "../../../../data/menu";
import Item from "../Item/Item";
import { MenuWrapper } from "./styles";
const Menu = () => {
    return(
        <MenuWrapper>
            {menuLang.map(({path,title},key:number) => 
                <Item
                    key={key}
                    path={path}
                    title={title}
                />
            )}
        </MenuWrapper>
    )
}
export default Menu;