import { ContentWrapper } from "./styles/ContentWrapper";

interface i {
    content : Array<string>,
    title : string
}
const Content = ({content,title}:i) => {
    return(
        <ContentWrapper>
            <h2>{title}</h2>
            <section>
                {content.map(i => <p key={i}>{i}</p>)}
            </section>
        </ContentWrapper>
    )
}
export default Content;