import { CardWrapper } from "./styles/CardWrapper";
interface i {
    content : string | any, 
    tags : Array<string>,
    title : string
}
const Card = ({content,tags,title}:i) => {
    return(
        <CardWrapper>
            <h4>{title}</h4>
            <ul>
                {tags.map(i => <li key={i}>{i}</li>)}
            </ul>
            <p>{content}</p>
        </CardWrapper>
    )
}
export default Card;