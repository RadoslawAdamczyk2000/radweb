import { useContext } from "react";
import { RiMoonFoggyLine, RiSunLine } from "react-icons/ri";
import { Context } from "../../../../../context/ThemeContext";
import { ThemeButtonWrapper } from "./styles";
const ThemeButton = () => {
    const {handle,value} = useContext(Context);
    return(
        <ThemeButtonWrapper onClick={handle}>
            {
                value ? 
                <RiMoonFoggyLine/> :
                <RiSunLine/>
            }
        </ThemeButtonWrapper>
    )
}
export default ThemeButton;