import { InputWrapper } from "./styles/InputWrapper";
interface i {
    handle : any,
    inputId ?: string,
    inputName ?: string,
    inputType ?: string,
    isInput ?: boolean,
    isSubmit ?: boolean,
    isText ?: boolean,
    place ?: string,
    title : string,
}
const Input = ({handle,inputId,inputName,inputType='text',isInput=false,isSubmit=false,isText=false,place,title}:i) => {
    return(
        <>
            {
                isInput &&
                <InputWrapper isInput>
                    <label htmlFor={inputName ? inputName : 'input'}>{title}</label>
                    <div>
                        <input 
                            aria-label={inputName ? inputName : 'input'} 
                            id={inputId} 
                            name={inputName} 
                            placeholder={place}
                            onInput={handle}
                            type={inputType}
                        />
                        <span/>
                    </div>
                </InputWrapper>
            }  
            {
                isText &&
                <InputWrapper isText>
                    <label htmlFor={inputId}>{title}</label>
                    <div>
                        <textarea 
                            id={inputId} 
                            name={inputName} 
                            onInput={handle}
                            placeholder={place}
                        />
                    </div>
                </InputWrapper>
            } 
            {
                isSubmit &&
                <InputWrapper isButton as='button' type="submit">
                    {title}
                </InputWrapper>
            } 
        </>
    )
}
export default Input;