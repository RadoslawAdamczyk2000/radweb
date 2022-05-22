import { IntContactMessageField } from "../../../../types/interface";
import { MessageWrapper } from "./styles";
const Message = ({id,handle,placeholder,title}:IntContactMessageField) => {
    return(
        <MessageWrapper>
            <label htmlFor={id}>{title}</label>
            <div>
                <textarea 
                    name={id}
                    id={id}
                    placeholder={placeholder}
                    required
                    onInput={handle}
                    minLength={10}
                    autoFocus
                />
            </div>
        </MessageWrapper>
    )
}
export default Message;