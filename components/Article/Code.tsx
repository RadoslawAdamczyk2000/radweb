import { IntCode } from "../../types/interface";
const Code = ({children}:IntCode) => {
    return(
        <code>
            <pre>
                {children}
            </pre>
        </code>
    )
}
export default Code;