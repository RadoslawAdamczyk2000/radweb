import {RiLightbulbFlashFill,RiLightbulbFlashLine} from 'react-icons/ri';
import { IntThemeButton } from '../../../types/interface';
import { ThemeButtonWrapper } from './styles';
const ThemeButton = ({handle,isLight}:IntThemeButton) => {
    return(
        <ThemeButtonWrapper onClick={handle}>
            {
                isLight ? 
                <RiLightbulbFlashLine/> :
                <RiLightbulbFlashFill/>
            }
        </ThemeButtonWrapper>
    )
}
export default ThemeButton;