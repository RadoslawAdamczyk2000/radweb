import { useRouter } from "next/router";
import { home } from "../../../../../content/home";
import { isLocaleAccepted } from "../../../../../lib/functions/isLocaleAccepted";
import Card from "../Card/Card";
import Content from "../Content/Content";
import { IntOffers } from "./interface";
import { OffersWrapper } from "./styles";

const Offers = ({button,card,content,locale:locales,path,title}:IntOffers) => {
    const {locale}  = useRouter();
    return(
        <OffersWrapper>
            <div>
                <Content
                    button={button}
                    content={content}
                    path={path}
                    title={title}
                />
            </div>
            <ul>
                {locale && isLocaleAccepted(locale) ? home[locale].offers.cards.map(({content,path,title},key) =>
                        <Card
                        button={card}
                        content={content}
                        key={key}
                        path={path}
                        title={title}
                    />
                ) : ''}
            </ul>
        </OffersWrapper>
    )
}
export default Offers;