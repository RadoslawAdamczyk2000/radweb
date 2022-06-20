import { SecondaryButton } from "../../../../All/Buttons/Page/Page";
import { Title } from "../../../../All/Title/Page/Page";
import { IntContent } from "./interface";
import { ContentWrapper } from "./styles";
const Content = ({button,content,image,path,title}:IntContent) => {
    return(
        <ContentWrapper image={image}>
            <section>
                <Title
                    isSecondary={true}
                    title={title}
                />
                <p dangerouslySetInnerHTML={{__html:content}}/>
                <SecondaryButton
                    button={button}
                    path={path}
                />
            </section>
        </ContentWrapper>
    )
}
export default Content;