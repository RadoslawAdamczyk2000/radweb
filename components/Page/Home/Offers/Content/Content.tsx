import Link from "next/link"
import SectionButton from "../../../../All/Button/SectionButton/SectionButton";
import { IntContent } from "./interface"
import { ContentWrapper } from "./styles";

const Content = ({button,content,path,title}:IntContent) => {
    return(
        <ContentWrapper>
            <h2>{title}</h2>
            <p dangerouslySetInnerHTML={{__html:content}}/>
            <div>
                <SectionButton
                    path={path}
                    title={button}
                />
            </div>
        </ContentWrapper>
    )
}
export default Content;