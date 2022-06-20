import { useRouter } from 'next/router';
import {menu} from '../../../../../data/menu';
import { isLocaleAccepted } from '../../../../../lib/functions/isLocaleAccepted';
import Item from '../Item/Item';
import { Wrapper } from './styles';
const Menu = () => {
    console.log(menu.pl)
    const {locale} = useRouter();
    return(
        <Wrapper>
            {locale && isLocaleAccepted(locale) && menu[locale].map(({path,submenu,title},key) =>
                <>
                    {
                        submenu ?
                        submenu.map(({path,title},key) =>
                            <Item
                                key={key}
                                path={path}
                                title={title}
                            />
                        ) :
                        <Item
                            key={key}
                            path={path}
                            title={title}
                        />
                    }
                    
                </>
            )}
        </Wrapper>
    )
}
export default Menu;