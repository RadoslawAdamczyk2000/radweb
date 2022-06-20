import { IntContent } from "./interface";
import { ContentWrapper } from "./styles";
const Content = ({content,title}:IntContent) => {
    return(
        <ContentWrapper>
            <h2>{title}</h2>
            <p dangerouslySetInnerHTML={{__html:content}} />
        </ContentWrapper>
    )
}
export default Content;