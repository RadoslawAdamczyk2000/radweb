import { home } from "../../../../content/pages/home";
import Button from "../../AllPages/Button";
import { ContentWrapper } from "./styles/ContentWrapper";
const Content = () => {
    const {button,content,path,title} = home.pl.whyMe;
    return(
        <ContentWrapper>
            <h2>{title}</h2>
            <div>
                <p>{content}</p>
            </div>
            <div>
                <Button
                    isPage={false}
                    isSecondary={false}
                    isSection={true}
                    path={path}
                    title={button}
                />
            </div>
        </ContentWrapper>
    )
}
export default Content;