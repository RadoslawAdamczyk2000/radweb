import { PostContentWrapper } from "./styles/PostContentWrapper";

interface i {
    children ?: any,
    heading : boolean,
    isH2 : boolean,
    title : string
}
const PostContent = ({children,heading,isH2,title}:i) => {
    return(
        <PostContentWrapper>
            {
                heading &&
                (
                    isH2 ?
                    <h2>{title}</h2> :
                    <h3>{title}</h3>
                )
            }
            <div>
                {children}
            </div>
        </PostContentWrapper>
    )
}
export default PostContent;