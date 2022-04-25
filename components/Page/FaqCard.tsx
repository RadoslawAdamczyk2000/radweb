import { IntFaqCard } from "../../types/interface";
import { FaqCardWrapper } from "./styles";
const FaqCard = ({content,title}:IntFaqCard) => {
    return(
        <FaqCardWrapper>
            <h4>{title}</h4>
            <p>{content}</p>
        </FaqCardWrapper>
    )
}
export default FaqCard;