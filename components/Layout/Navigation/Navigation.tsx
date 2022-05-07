import Link from "next/link";
import { IntNavigation } from "../../../types/interface";
import Brand from "./Brand";
import ProgressBar from "./ProgressBar"
import {VscArrowSmallDown} from 'react-icons/vsc';
import { menu } from "../../../data/menu";
import MenuItem from "./MenuItem";
import Menu from "./Menu";
import Options from "./Options";
import { useState } from "react";
import { NavigationWrapper } from "./styles";
const Navigation = ({isArticle=false}:IntNavigation) => {
    const [isActive,setActive] = useState(false)
    const [isLight,setLight] = useState(false)
    return(
        <>
            <NavigationWrapper className='desktop'> 
                <Brand/>
                <div>
                    <Menu/>
                    <Options
                        isActive={isActive}
                        isLight={isLight}
                        menuHandle={() => setActive(!isActive)}
                        themeHandle={() => setLight(!isLight)}
                    />
                </div>
            </NavigationWrapper>
            <NavigationWrapper className='mobile'> 
                <div>
                    <Brand/>
                    <Options
                        isActive={isActive}
                        isLight={isLight}
                        menuHandle={() => setActive(!isActive)}
                        themeHandle={() => setLight(!isLight)}
                    />
                </div>
                {isActive && <Menu/>}
            </NavigationWrapper>
            {isArticle && <ProgressBar/>}
        </>
    )
}
export default Navigation;