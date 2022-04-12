import { posts } from "../../../../data/posts";
import Card from "../../../atoms/BlogPage/Card/Card";
import { CardsWrapper } from "./styles/CardsWrapper";
const Cards = () => {
    const {articles} = posts;
    return(
        <CardsWrapper>
            {articles.map(({poster,path,time,title,readTime}) => 
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