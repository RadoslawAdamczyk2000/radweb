import { faq } from "../../../data/faq";
import Card from "../../atoms/FaqPage/Card";
import { CardsWrapper } from "./styles/CardsWrapper";
const Cards = () => {
    return(
        <CardsWrapper>
            {faq.pl.map(({content,id,tags,title}) =>
                <Card
                    content={content}
                    tags={tags}
                    title={title}
                    key={id}
                />
            )}
        </CardsWrapper>
    )
}
export default Cards;