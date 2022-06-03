import { useContext } from "react";
import { RiMoonFoggyLine, RiSunLine } from "react-icons/ri";
import { Context } from "../../../../../context/ThemeContext";
const ThemeButton = () => {
    const {handle,value} = useContext(Context);
    return(
        <div className="button" onClick={handle}>
            {
                value ? 
                <RiMoonFoggyLine/> :
                <RiSunLine/>
            }
        </div>
    )
}
export default ThemeButton;