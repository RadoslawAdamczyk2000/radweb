import { ContentHome } from "../../../../All/Content/Page/Page";
import { Title } from "../../../../All/Title/Page/Page";
import { IntContent } from "./interface";
import { ContentWrapper } from "./styles";
const Content = ({content,title}:IntContent) => {
    return(
        <ContentWrapper>
             <Title
                isPrimary={true}
                title={title}
            />
            <ContentHome
                isPrimary={true}
                content={content}
            />
        </ContentWrapper>
    )
}
export default Content;