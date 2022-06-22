import { useRouter } from "next/router"
import { home } from "../../../../../content/home"
import { isLocaleAccepted } from "../../../../../lib/functions/isLocaleAccepted"
import Card from "../Card/Card"
import Content from "../Content/Content"
import {IntSteps} from "./interface"
import { Cards, Wrapper } from "./styles"
const Steps = ({content,locale:locales,title}:IntSteps) => {
    const {locale} = useRouter();
    return(
        <Wrapper>
            <Content
                content={content}
                title={title}
            />
            <Cards>
                {   locale && isLocaleAccepted(locale) ?
                    home[locale].steps.cards.map(({content,title},key) =>
                        <>
                            <Card
                                content={content}
                                key={key}
                                number={key}
                                title={title}
                            />
                        </>    
                    ) : ''
                }
            </Cards>
        </Wrapper>
    )
}
export default Steps;