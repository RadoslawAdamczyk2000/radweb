import Card from "../../../atoms/HomePage/Projects/Card";
import { CardsWrapper } from "./styles/CardsWrapper";

const Cards = () => {
    return(
        <CardsWrapper>
            <Card
                button="Przeczytaj"
                content="Well, you're in the right place. My website is your one stop shop for everything you need to build JavaScript apps.Well, you're in the right place. My website is your one stop shop for everything you need to build JavaScript apps."
                image="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849826_960_720.jpg"
                path=""
                title="Somebody App"
            />
            <Card
                button="Przeczytaj"
                content="Well, you're in the right place. My website is your one stop shop for everything you need to build JavaScript apps.Well, you're in the right place. My website is your one stop shop for everything you need to build JavaScript apps."
                image="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849826_960_720.jpg"
                path=""
                title="Somebody App"
            />
        </CardsWrapper>
    )
}
export default Cards;