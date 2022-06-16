import Link from "next/link"
import { IntContent } from "./interface";
import { ContentWrapper } from "./styles";
const Content = ({button,content,path,title}:IntContent) => {
    return(
        <ContentWrapper>
            <section>
                <h2>{title}</h2>
                <p dangerouslySetInnerHTML={{__html:content}} />
                <div>
                    <Link href={path}>
                        <a>
                            {button}
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                        </a>
                    </Link>
                </div>
            </section>
        </ContentWrapper>
    )
}
export default Content;