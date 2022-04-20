import {RiMoonFoggyLine,RiSunFoggyLine} from 'react-icons/ri';
import { IntThemeButton } from '../../types/interface';
import { ThemeButtonWrapper } from './styles';
const ThemeButton = ({isLight,handleThemeButton}:IntThemeButton) => {
    return(
        <ThemeButtonWrapper light={isLight} onClick={handleThemeButton} >
            {
                isLight ?
                <RiSunFoggyLine/> :
                <RiMoonFoggyLine/>
            }
        </ThemeButtonWrapper>
    )
}
export default ThemeButton;