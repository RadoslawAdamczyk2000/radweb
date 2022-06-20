import { IntCard } from "./interface"
import { CardWrapper } from "./styles";
const Card = ({content,number,title}:IntCard) => {
    const int:number = number + 1;
    return(
        <CardWrapper>
            <div>
                <p>
                    {int < 10 ? `0${int}` : int}
                </p>
            </div>
            <section>
                <h3>{title}</h3>
                <p dangerouslySetInnerHTML={{__html:content}} />
            </section>
        </CardWrapper>
    )
}
export default Card;