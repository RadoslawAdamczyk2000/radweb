import SectionButton from "../../../../All/Button/SectionButton/SectionButton"
import { IntContent } from "./interface";
import { ContentWrapper } from "./styles";
const Content = ({button,content,path,title}:IntContent) => {
    return(
        <ContentWrapper>
            <h2>{title}</h2>
            <p dangerouslySetInnerHTML={{__html:content}} />
            <SectionButton
                path={path}
                title={button}
            />
        </ContentWrapper>
    )
}
export default Content;