import {IntFaqCard} from '../../../../types/interface';
import { CardWrapper } from './styles';
const Card = ({content,title}:IntFaqCard) => {
    return(
        <CardWrapper>
            <h2>{title}</h2>
            <p>{content}</p>
        </CardWrapper>
    )
}
export default Card;