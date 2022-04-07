import { InputWrapper } from "./styles/InputWrapper";

// interface i {
//     handle : any,
//     inputId ?: string,
//     inputName ?: string,
//     inputType ?: string,
//     isInput ?: boolean,
//     isSubmit ?: boolean,
//     isText ?: boolean,
//     place ?: string,
//     refVal : any,
//     title : string,
//     val : any
// }
const Input = ({handle,inputId,inputName,inputType='text',isInput=false,isSubmit=false,isText=false,place,refVal,title,val}) => {
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
                            onInput={(e) => handle(e.target.value)}
                            ref={refVal}
                            type={inputType}
                            value={val}
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
                            onInput={(e) => handle(e.target.value)}
                            placeholder={place}
                            ref={refVal}
                            value={val}
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