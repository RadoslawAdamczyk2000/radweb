import Link from "next/link"
import { IntContent } from "./interface";
import { ContentWrapper } from "./styles";
const Content = ({button,content,image,path,title}:IntContent) => {
    return(
        <ContentWrapper image={image}>
            <section>
                <h2>{title}</h2>
                <p dangerouslySetInnerHTML={{__html:content}}/>
                <div>
                    <Link href={path}>
                        <a>
                            {button}
                        </a>
                    </Link>
                </div>
            </section>
        </ContentWrapper>
    )
}
export default Content;