import { IntNewsletterField } from "../../../../types/interface";
const Field = ({id,min,name,pattern,title,type}:IntNewsletterField) => {
    return(
        <div>
            <input 
                id={id}
                type={type}
                minLength={min}
                name={name}
                pattern={pattern}
                placeholder={title}
            />
            <span/>
        </div>
    )
}
export default Field;