import { home } from "../../../../content/pages/home";
import { ContentWrapper } from "./styles/ContentWrapper";
const Content = () => {
    const {hero} = home.pl;
    return(
        <ContentWrapper>
            <div dangerouslySetInnerHTML={{__html:hero.content}} />
        </ContentWrapper>
    )
}
export default Content;