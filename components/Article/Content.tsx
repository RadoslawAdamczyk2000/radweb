import { IntContentArticle } from "../../types/interface"
import { ContentWrapper } from "./styles";
const Content = ({children,isExcerpt}:IntContentArticle) => {
    return(
        <ContentWrapper className={isExcerpt ? 'excerpt' : 'regular'} >
            {children}
        </ContentWrapper>
    )
}
export default Content;