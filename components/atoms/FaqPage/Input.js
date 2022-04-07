import { InputWrapper } from "./styles/InputWrapper";

// interface i {
//     handle : any,
//     inputId : string,
//     inputName : string,
//     isMail ?: boolean,
//     isText ?: boolean,
//     title : string
// }
const Input = ({handle,inputId,inputName,isMail=false,isText=false,title}) => {
    return(
        <>
            {
                isText ?
                <InputWrapper isText>
                    <label htmlFor={inputName} >{title}</label>
                    <div>
                        <textarea name={inputName} id={inputId}/>
                    </div>
                </InputWrapper> :
                <InputWrapper isInput>
                    <label htmlFor={inputName} >{title}</label>
                    <div>
                        <input type={isMail ? 'email' : 'text'} name={inputName} id={inputId} onInput={handle}/>
                    </div>
                </InputWrapper>
            }
        </>
    )
}
export default Input;