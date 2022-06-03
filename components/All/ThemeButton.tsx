import { useContext } from "react";
import { Context} from "../../context/ThemeContext";

const ThemeButton = () => {
    const {handle,value} = useContext(Context);
    return(
        <div className="button" onClick={handle}>
            ZMIEŃ MOTYW
        </div>
    )
}
export default ThemeButton;