import { IntContent } from "./interface";
const Content = ({content,title}:IntContent) => {
    return(
        <section>
            <h2>{title}</h2>
            <p dangerouslySetInnerHTML={{__html:content}} />
        </section>
    )
}
export default Content;