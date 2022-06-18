import Link from "next/link";
import BlogCard from "../../../All/BlogCard/BlogCard";
import { IntBlog } from "./interface";
import { BlogWrapper } from "./styles";
const Blog = ({button,content,path,title}:IntBlog) => {
    return(
        <BlogWrapper>
            <section>
                <h2>{title}</h2>
                <p dangerouslySetInnerHTML={{__html:content}}/>
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