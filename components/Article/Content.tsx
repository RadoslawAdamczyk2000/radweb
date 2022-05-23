import { ReactChild} from "react";
import { ContentWrapper } from "./styles";
interface i {
    children:ReactChild,
    title?:string;
}
const Content = ({children,title}:i) => {
    return(
        <ContentWrapper>
            <h2>{title}</h2>
            <p>{children}</p>
        </ContentWrapper>
    )
}
export default Content;