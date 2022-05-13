import { IntNewsletterField } from "../../../../types/interface";
import { FieldWrapper } from "./styles";
const Field = ({id,min,name,pattern,title,type}:IntNewsletterField) => {
    return(
        <FieldWrapper>
            {
                pattern ?
                <input 
                    id={id}
                    type={type}
                    minLength={min}
                    name={name}
                    pattern={pattern}
                    placeholder={title}
                /> :
                <input 
                    id={id}
                    type={type}
                    minLength={min}
                    name={name}
                    placeholder={title}
                />
            }
            
            <span/>
        </FieldWrapper>
    )
}
export default Field;