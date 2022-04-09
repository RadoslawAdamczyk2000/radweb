import { useEffect } from "react";
import { faq } from "../../../data/faq";
import Card from "../../atoms/FaqPage/Card";
import { CardsWrapper } from "./styles/CardsWrapper";
interface i {
    search : string
}
const Cards = ({search}:i) => {
    const {pl} = faq;
    const searchFnc = (data:any) => {
        return data.filter(
            (i:any) =>
            i.content.toLowerCase().includes(search) ||
            i.tags.includes(search) ||
            i.title.toLowerCase().includes(search) 
        )
    }
    return(
        <CardsWrapper>
            {
                searchFnc(pl).map(({content,id,tags,title}) =>
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