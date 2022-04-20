import { useState } from "react";
import { IntNavigation } from "../../types/interface";
import Brand from "./Brand";
import Menu from "./Menu";
import Options from "./Options";
import { NavMobileWrapper } from "./styles";
const Navigation = ({theme,setTheme}:IntNavigation) => {
    const [menuButton,setMenuButton] = useState(false);
    const handleMenuButton = () => {
        setMenuButton(!menuButton);
    }
    return(
        <>
            {/* <nav>
                <Brand/>
                <div>
                    <Menu isFooter={false} />
                    <Options
                        active={menuButton}
                        handleMenuButton={() => handleMenuButton()}
                        handleThemeButton={setTheme}
                        isLight={theme}
                    />
                </div>
            </nav> */}
            <NavMobileWrapper>
                <div>
                    <Brand/>
                    <Options
                        active={menuButton}
                        handleMenuButton={() => handleMenuButton()}
                        handleThemeButton={setTheme}
                        isLight={theme}
                    />
                </div>
                <div>
                    <Menu isFooter={false} />
                </div>
            </NavMobileWrapper>
        </>
    )
}
export default Navigation;