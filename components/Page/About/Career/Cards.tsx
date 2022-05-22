import { aboutMe } from "../../../../content/about-me";
import Card from "./Card";
import { CardsWrapper } from "./styles";

const Cards = () => {
    const {cards} = aboutMe.carrer.page;
    return(
        <CardsWrapper>
            {cards.map(({company,description,index,job,start,end},key) => 
                <Card
                    key={key}
                    company={company}
                    description={description}
                    end={end}
                    index={index}
                    job={job}
                    start={start}
                />
            )}
        </CardsWrapper>
    )
}
export default Cards;