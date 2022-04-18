import { posts } from "../../../../data/posts";
import Card from "../../../atoms/BlogPage/Card/Card";
import { CardsWrapper } from "./styles/CardsWrapper";
interface i {
    search : string
}
const Cards = ({search}:i) => {
    const {articles} = posts;
    return(
        <CardsWrapper>
            {articles.filter(i => i.title.toLowerCase().includes(search.toLowerCase())).reverse().map(({poster,path,time,title,readTime}) => 
                <Card
                    key={title}
                    image={poster}
                    path={path}
                    time={time}
                    title={title}
                    readTime={readTime}
                />
            )}
        </CardsWrapper>
    )
}
export default Cards;