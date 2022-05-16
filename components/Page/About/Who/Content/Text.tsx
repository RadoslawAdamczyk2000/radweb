import { IntAboutMeText } from "../../../../../types/interface";
import { TextWrapper } from "./styles";
const Text = ({content,heading,path}:IntAboutMeText) => {
    return(
        <TextWrapper>
            {
                heading &&
                <h2 id={path}>{heading}</h2>
            }
            <p>
                {content}
            </p>
        </TextWrapper>
    )
}
export default Text;