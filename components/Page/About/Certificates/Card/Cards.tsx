import { aboutMe } from "../../../../../content/about-me";
import Card from "./Card";
import { CardsWrapper } from "./styles";

const Cards = () => {
    const {cards} = aboutMe.courses.page;
    return(
        <CardsWrapper>
            {cards.map(({content,image,path,source,title},key) =>
                <Card
                    content={content}
                    image={image}
                    key={key}
                    path={path}
                    source={source}
                    title={title}
                />
            )}
        </CardsWrapper>
    )
}
export default Cards;