import { IntBlog } from "../../types/interface"
import Content from "./Content"
import { BlogWrapper } from "./styles";
const Blog = ({button,children,content,isHome,path,title}:IntBlog) => {
    return(
        <BlogWrapper>
            {
                isHome &&
                <Content
                    button={button}
                    content={content}
                    primary={true}
                    isVertical={false}
                    path={path}
                    title={title}
                    withMedia={false}
                />
            }
            <ul>
                {children}
            </ul>
        </BlogWrapper>
    )
}
export default Blog;