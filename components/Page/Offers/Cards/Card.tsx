import Link from "next/link"
import { IntOfferCard } from "../../../../types/interface";
import { CardWrapper } from "./styles";
const Card = ({button,content,isMain,link='',title}:IntOfferCard) => {
    return(
        <CardWrapper>
            {
                isMain ?
                <h2>{title}</h2> :
                <h3>{title}</h3>
            }
            <p>{content}</p>
            {
                button &&
                <Link href={link}>
                    <a>
                        {button}
                    </a>
                </Link>
            }
            
        </CardWrapper>
    )
}
export default Card;