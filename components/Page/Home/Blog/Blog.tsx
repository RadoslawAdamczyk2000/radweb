import BlogCard from "../../../All/BlogCard/BlogCard";
import { PrimaryButton } from "../../../All/Buttons/Page/Page";
import { Title } from "../../../All/Title/Page/Page";
import { IntBlog } from "./interface";
import { BlogWrapper } from "./styles";
const Blog = ({button,content,path,title}:IntBlog) => {
    return(
        <BlogWrapper>
            <section>
                <Title
                    isPrimary={true}
                    title={title}
                />
                <p dangerouslySetInnerHTML={{__html:content}}/>
                <PrimaryButton
                    button={button}
                    path={path}
                />
            </section>
            <ul>
                <BlogCard
                    categoryName="programowanie"
                    categoryPath=""
                    date='12-05-2022'
                    image="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80"
                    path="#"
                    title="Co to jest SEO?"
                />
                <BlogCard
                    categoryName="programowanie"
                    categoryPath=""
                    date='12-05-2022'
                    image="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80"
                    path="#"
                    title="Co to jest SEO?"
                />
                <BlogCard
                    categoryName="programowanie"
                    categoryPath=""
                    date='12-05-2022'
                    image="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80"
                    path="#"
                    title="Co to jest SEO?"
                />
                <BlogCard
                    categoryName="programowanie"
                    categoryPath=""
                    date='12-05-2022'
                    image="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80"
                    path="#"
                    title="Co to jest SEO?"
                />
                <BlogCard
                    categoryName="programowanie"
                    categoryPath=""
                    date='12-05-2022'
                    image="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80"
                    path="#"
                    title="Co to jest SEO?"
                />
                <BlogCard
                    categoryName="programowanie"
                    categoryPath=""
                    date='12-05-2022'
                    image="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80"
                    path="#"
                    title="Co to jest SEO?"
                />
            </ul>
        </BlogWrapper>
    )
}
export default Blog;