import { ReactElement } from "react";
import { CardsWrapper } from "./styles/CardsWrapper";
interface i {
    children : ReactElement | Array<ReactElement>
}
const Cards = ({children}:i) => {
    return(
        <CardsWrapper>
            {children}
        </CardsWrapper>
    )
}
export default Cards;