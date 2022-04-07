import { useState } from 'react';
import {RiSunLine,RiMoonLine} from 'react-icons/ri'
import { ThemeButtonWrapper } from './styles/ThemeButtonWrapper';
interface i {
    changeTheme : any
}
const ThemeButton = ({changeTheme}:i) => {
    const [light,setLight] = useState(false);
    const buttonAction = () => {
        changeTheme();
        setLight(!light);
    }
    return(
        <ThemeButtonWrapper onClick={() => buttonAction()} >
            { light ? <RiSunLine/> : <RiMoonLine/>}
        </ThemeButtonWrapper>
    )
}
export default ThemeButton;