import { HeroContentWrapper } from "./styles/HeroContentWrapper";

interface i {
    content : string,
    title : string,
}
const HeroContent = ({content,title}:i) => {
    return(
        <HeroContentWrapper>
            <h1>{title}</h1>
            <p>{content}</p>
        </HeroContentWrapper>
    )
}
export default HeroContent;