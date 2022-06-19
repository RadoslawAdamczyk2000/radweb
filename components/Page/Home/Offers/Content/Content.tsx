import Link from "next/link"
import { IntCard } from "../Card/interface";
import { ContentWrapper } from "./styles";
const Content = ({button,content,path,title}:IntCard) => {
    return(
        <ContentWrapper>
            <h2>{title}</h2>
            <p dangerouslySetInnerHTML={{__html:content}}/>
            <div>
                <Link href={path}>
                    <a>
                        {button}
                    </a>
                </Link>
            </div>
        </ContentWrapper>
    )
}
export default Content;