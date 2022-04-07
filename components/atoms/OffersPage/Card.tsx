import Link from "next/link";
import Button from "../AllPages/Button";
import { CardWrapper } from "./styles/CardWrapper";
interface i {
    button ?: string,
    content : string | any,
    path ?: string,
    price ?: number | string | boolean,
    title : string
}
const Card = ({button='Zobacz więcej',content,path,price,title}:i) => {
    return(
        <CardWrapper>
            <article>
                <h2>{title}</h2>
                <p dangerouslySetInnerHTML={{__html:content}}/>
                {price && <strong>ok {price} PLN</strong>}
                {path && 
                    <Button 
                        isPage={false}
                        isSecondary={false}
                        isSection={true}
                        path={path}
                        title={button}
                    />
                }
            </article>
        </CardWrapper>
    )
}
export default Card;