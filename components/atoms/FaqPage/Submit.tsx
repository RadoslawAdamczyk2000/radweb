import { SubmitWrapper } from "./styles/SubmitWrapper";
interface i {
    handle : any,
    title : string
}
const Submit = ({handle,title}:i) => {
    return(
        <SubmitWrapper onClick={handle} onKeyPress={handle}>
            {title}
        </SubmitWrapper>
    )
}
export default Submit;