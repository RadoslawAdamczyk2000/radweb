import { IntContactField } from "../../../../types/interface";
import { FieldWrapper } from "./styles";
const Field = ({handle,id,pattern,placeholder,title,type}:IntContactField) => {
    return(
        <FieldWrapper>
            <label htmlFor={id}>{title}</label>
            <div>
                {
                    pattern ?
                    <input 
                        id={id}
                        name={id}   
                        pattern={pattern}
                        placeholder={placeholder}
                        onInput={handle}
                        required 
                        autoFocus
                        type={type} 
                    />:
                    <input 
                        id={id}
                        name={id}
                        placeholder={placeholder}
                        onInput={handle}
                        required 
                        autoFocus
                        type={type} 
                    />
                }
                <span/>
            </div>
        </FieldWrapper>
    )
}
export default Field;