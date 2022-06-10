import { useContext } from "react";
import { FaRegFlag } from "react-icons/fa";
import { Context } from "../../../../../context/LangContext";
import { LangButtonWrapper } from "./styles";

const LangButton = () => {
    const {open} = useContext(Context);
    return(
        <LangButtonWrapper 
            className='themeButton'
            onClick={() => open()}
            title='PL-pl polski' 
        >
            <FaRegFlag/>
        </LangButtonWrapper>
    )
}
export default LangButton;