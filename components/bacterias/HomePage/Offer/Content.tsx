import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { home } from "../../../../content/pages/home"
import OfferCard from "../../../atoms/HomePage/Offer/OfferCard";
import OfferItem from "../../../atoms/HomePage/Offer/OfferItem";
import { ContentWrapper } from "./styles/ContentWrapper";
const Content = () => {
    let [activeCard,setActiveCard] = useState<'www'|'seo'|'opt'|string>('www');
    const {offer} = home.pl;
    const wrapper = useRef<null>(null);
    const box = wrapper.current;
    useEffect(() => {
        gsap.from(box,{duration:.2,opacity:0,scale:0,visibility:'hidden'});
        gsap.to(box,{duration:.5,opacity:1,scale:1,visibility:'visible'});
    })
    const {cards} = offer;
    return (
        <ContentWrapper>
            <div>
                {
                    offer.buttons.map(({title,value}) =>
                        <OfferItem title={title} key={value} handleCard={() => setActiveCard(value)} />
                    )
                }
            </div>
            <div>
                <div ref={wrapper} id="wrapper">
                    <OfferCard
                        button={cards?.button}
                        image={cards?.[activeCard].image}
                        path={cards?.[activeCard].path}
                        title={cards?.[activeCard].title}
                    >
                        {cards?.[activeCard].content}
                    </OfferCard>
                </div>
            </div>
        </ContentWrapper>
    )
}
export default Content;