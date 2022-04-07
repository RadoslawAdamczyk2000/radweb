import { SubmitWrapper } from "./styles/SubmitWrapper";
interface i {
    title : string
}
const Submit = ({title}:i) => {
    return(
        <SubmitWrapper>
            {title}
        </SubmitWrapper>
    )
}
export default Submit;