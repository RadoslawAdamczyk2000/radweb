import { useState } from "react"
import { home } from "../../content/pages/home"
import { IntOffers } from "../../types/interface"
import Content from "./Content"
import OfferCard from "./OfferCard"
import { OffersHomeWrapper } from "./styles"
const Offers = ({children,isHome}:IntOffers) => {
    const {button,buttons,cards,content,path,title} = home.pl.offer;
    const [defaultValue,setDefaultValue] = useState<'www'|'seo'|'opt'>('www');
    const current = {
        content:cards?.[defaultValue].content,
        title:cards?.[defaultValue].title,
        path:cards?.[defaultValue].path,
    }
    return(
        <>
            {
                isHome ? 
                <OffersHomeWrapper>
                    <article>
                        <Content
                            button={button}
                            content={content}
                            isVertical={false}
                            primary={false}
                            path={path}
                            title={title}
                            withMedia={false}
                        />
                    </article>
                    <div>
                        <ul>
                            {buttons.map(({title,value},key) =>
                                <li key={key} onClick={() => {setDefaultValue(value), console.log(current) }}>
                                    {title}
                                </li>
                            )}
                        </ul>
                        <div>
                            <OfferCard
                                content={current.content}
                                isHome={true}
                                path={current.path}
                                title={current.title}
                            />
                        </div>
                    </div>
                </OffersHomeWrapper>:
                <ul>
                    {children}
                </ul>
            }
        </>
    )
}
export default Offers;