import { InputWrapper } from "./styles/InputWrapper";

interface i {
    inputId : string,
    inputName : string,
    isMail : boolean,
    label : string,
}
const Input = ({inputId,inputName,isMail,label}:i) => {
    return(
        <InputWrapper>
            <label htmlFor={inputId} >{label}</label>
            <input type={isMail ? 'email' : 'text'} id={inputId} name={inputName} />
        </InputWrapper>
    )
}
export default Input;