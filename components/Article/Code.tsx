import { IntCode } from "../../types/interface";
import { CodeWrapper } from "./styles";
const Code = ({children}:IntCode) => {
    return(
        <CodeWrapper>
            {children}
        </CodeWrapper>
    )
}
export default Code;