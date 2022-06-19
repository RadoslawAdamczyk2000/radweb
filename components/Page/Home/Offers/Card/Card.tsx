import Link from "next/link"
import { IntCard } from "./interface";
import { CardWrapper } from "./styles";
const Card = ({button,content,path,title}:IntCard) => {
    return(
        <CardWrapper>
            <h3>{title}</h3>
            <p dangerouslySetInnerHTML={{__html:content}}/>
            <div>
                <Link href={path}>
                    <a>
                        {button}
                    </a>
                </Link>
            </div>
        </CardWrapper>
    )
}
export default Card;