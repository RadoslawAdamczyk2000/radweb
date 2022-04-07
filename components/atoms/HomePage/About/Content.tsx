import { home } from "../../../../content/pages/home";
import Button from "../../AllPages/Button";
import { ContentWrapper } from "./styles/ContentWrapper";
const Content = () => {
    const {about} = home.pl;
    return(
        <ContentWrapper>
            <h2 className="title">{about.title}</h2>
            <div className="content">
                <div dangerouslySetInnerHTML={{__html:about.content}}/>
            </div>
            <Button
                isPage={false}
                isSecondary={false}
                isSection={true}
                path={about.path}
                title={about.button}
            />
        </ContentWrapper>
    )
}
export default Content;