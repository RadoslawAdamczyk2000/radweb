import { CodeWrapper } from "./styles";
const Code = ({children}:{children:string}) => {
    return(
        <CodeWrapper>
            {children}
        </CodeWrapper>
    )
}
export default Code;