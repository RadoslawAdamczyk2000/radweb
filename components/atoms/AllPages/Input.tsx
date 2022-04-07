import { InputWrapper } from "./styles/InputWrapper";

interface i {
    inputId ?: string,
    inputName ?: string,
    inputType ?: string,
    isInput ?: boolean,
    isSubmit ?: boolean,
    isText ?: boolean,
    place ?: string,
    title : string,
}
const Input = ({inputId,inputName,inputType='text',isInput=false,isSubmit=false,isText=false,place,title}:i) => {
    return(
        <>
            {
                isInput &&
                <InputWrapper isInput>
                    <label htmlFor={inputId}>{title}</label>
                    <div>
                        <input 
                            id={inputId} 
                            name={inputName} 
                            placeholder={place}
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
                            placeholder={place}
                        />
                    </div>
                </InputWrapper>
            } 
            {
                isSubmit &&
                <InputWrapper isButton as='button'>{title}</InputWrapper>
            } 
        </>
    )
}
export default Input;