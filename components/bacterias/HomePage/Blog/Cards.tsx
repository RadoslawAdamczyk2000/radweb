import { posts } from "../../../../data/posts";
import Card from "../../../atoms/HomePage/Blog/Card"
import { CardsWrapper } from "./styles/CardsWrapper";
const Cards = () => {
    const {articles} = posts;
    return(
        <CardsWrapper>
            <Card
                date={articles[articles.length - 1].time}
                image={articles[articles.length - 1].poster}
                path={articles[articles.length - 1].path}
                time={articles[articles.length - 1].readTime}
                title={articles[articles.length - 1].title}
            />
            <Card
                date={articles[articles.length - 2].time}
                image={articles[articles.length - 2].poster}
                path={articles[articles.length - 2].path}
                time={articles[articles.length - 2].readTime}
                title={articles[articles.length - 2].title}
            />
            <Card
                date={articles[articles.length - 3].time}
                image={articles[articles.length - 3].poster}
                path={articles[articles.length - 3].path}
                time={articles[articles.length - 3].readTime}
                title={articles[articles.length - 3].title}
            />
        </CardsWrapper>
    )
}
export default Cards;