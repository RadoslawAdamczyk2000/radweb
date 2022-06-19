import Card from "../Card/Card";
import Content from "../Content/Content";
import { IntOffers } from "./interface";
import { OffersWrapper } from "./styles";

const Offers = ({button,card,content,locale,path,title}:IntOffers) => {
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
                <Card
                    button={card}
                    content="Strona internetowa jest idealnym pomysłem na rozszerzenie swojej działalności na internet, z którego można pozyskać nowych klientów. Dlatego postaw na niepowtarzalne i responsywne strony internetowe."
                    path="#"
                    title="Tworzenie stron internetowych"
                />
                <Card
                    button={card}
                    content="Strona internetowa jest idealnym pomysłem na rozszerzenie swojej działalności na internet, z którego można pozyskać nowych klientów. Dlatego postaw na niepowtarzalne i responsywne strony internetowe."
                    path="#"
                    title="Tworzenie stron internetowych"
                />
                <Card
                    button={card}
                    content="Strona internetowa jest idealnym pomysłem na rozszerzenie swojej działalności na internet, z którego można pozyskać nowych klientów. Dlatego postaw na niepowtarzalne i responsywne strony internetowe."
                    path="#"
                    title="Tworzenie stron internetowych"
                />
                <Card
                    button={card}
                    content="Strona internetowa jest idealnym pomysłem na rozszerzenie swojej działalności na internet, z którego można pozyskać nowych klientów. Dlatego postaw na niepowtarzalne i responsywne strony internetowe."
                    path="#"
                    title="Tworzenie stron internetowych"
                />
                <Card
                    button={card}
                    content="Strona internetowa jest idealnym pomysłem na rozszerzenie swojej działalności na internet, z którego można pozyskać nowych klientów. Dlatego postaw na niepowtarzalne i responsywne strony internetowe."
                    path="#"
                    title="Tworzenie stron internetowych"
                />
            </ul>
        </OffersWrapper>
    )
}
export default Offers;