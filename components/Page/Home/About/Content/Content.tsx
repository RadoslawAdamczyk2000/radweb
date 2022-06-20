import { PrimaryButton } from "../../../../All/Buttons/Page/Page";
import { ContentHome } from "../../../../All/Content/Page/Page";
import { Title } from "../../../../All/Title/Page/Page";
import { IntContent } from "./interface";
import { ContentWrapper } from "./styles";
const Content = ({button,content,path,title}:IntContent) => {
    return(
        <ContentWrapper>
            <section>
                <Title
                    isPrimary={true}
                    title={title}
                />
               <ContentHome
                    isPrimary={true}
                    content={content}
                />
                <PrimaryButton
                    button={button}
                    path={path}
                />
            </section>
        </ContentWrapper>
    )
}
export default Content;