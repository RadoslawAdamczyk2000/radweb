import { IntBlog } from "../../types/interface"
import Content from "./Content"
const Blog = ({button,children,content,isHome,path,title}:IntBlog) => {
    return(
        <section>
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
        </section>
    )
}
export default Blog;