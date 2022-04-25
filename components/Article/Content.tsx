import { IntContentArticle } from "../../types/interface"
import { ContentWrapper } from "./styles";
const Content1 = ({children,isExcerpt}:IntContentArticle) => {
    return(
        <ContentWrapper className={isExcerpt ? 'excerpt' : 'regular'} >
            {children}
        </ContentWrapper>
    )
}
export default Content1;