import Link from "next/link"
import { PrimaryButton } from "../../../../All/Buttons/Page/Page";
import { Title } from "../../../../All/Title/Page/Page";
import { IntCard } from "../Card/interface";
import { ContentWrapper } from "./styles";
const Content = ({button,content,path,title}:IntCard) => {
    return(
        <ContentWrapper>
            <Title
                isPrimary={true}
                title={title}
            />
            <p dangerouslySetInnerHTML={{__html:content}}/>
            <PrimaryButton
                button={button}
                path={path}
            />
        </ContentWrapper>
    )
}
export default Content;