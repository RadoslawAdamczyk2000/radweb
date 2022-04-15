import { InputWrapper } from "./styles/InputWrapper";
interface i {
    handle ?: any,
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
                    <label htmlFor={inputName ? inputName : 'x'}>{title}</label>
                    <div>
                        <input 
                            aria-label={inputName ? inputName : 'x'} 
                            id={inputId} 
                            name={inputName} 
                            placeholder={place}
                            minLength={3}
                            onInput={handle}
                            type={inputType}
                            required
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
                            required
                            minLength={10}
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