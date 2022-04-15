import { InputWrapper } from "./styles/InputWrapper";

interface i {
    inputId : string,
    inputName : string,
    isMail : boolean,
    handle : any,
    label : string,
}
const Input = ({inputId,inputName,isMail,handle,label}:i) => {
    return(
        <InputWrapper>
            <label htmlFor={inputId} >{label}</label>
            <input 
                type={isMail ? 'email' : 'text'} 
                id={inputId} name={inputName} 
                onInput={handle}
                minLength={3}
                required
            />
        </InputWrapper>
    )
}
export default Input;