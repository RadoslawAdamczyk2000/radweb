import { ContentWrapper } from "./styles/ContentWrapper";

interface i {
    content : string,
    isHero ?: boolean,
}
const Content = ({content,isHero}:i) => {
    return(
        <>
            {
                isHero &&
                <ContentWrapper isHero={true}><p>{content}</p></ContentWrapper>
            }
        </>
    )
}
export default Content;