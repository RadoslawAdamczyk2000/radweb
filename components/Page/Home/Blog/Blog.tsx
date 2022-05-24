import Link from "next/link";
import { home } from "../../../../content/home";
import { posts } from "../../../../data/posts";
import Card from "../../Blog/Cards/Card";
import { BlogWrapper } from "./styles";
const Blog = () => {
    const {button,content,title} = home.page.blog;
    const {articles} = posts;
    return(
        <BlogWrapper>
            <article>
                <h2>{title}</h2>
                <p>{content}</p>
                <Link href={button.path}>
                    <a>
                        {button.title}
                    </a>
                </Link>
            </article>
            <ul id='cards'>
                {articles.slice(0,5).reverse().map(({title,image,tags,path,date,excerpt},key) =>
                    <Card
                        content={excerpt}
                        date={date}
                        image={image}
                        key={key}
                        link={path}
                        tags={tags}
                        title={title}
                    />
                )}
                
            </ul>       
        </BlogWrapper>
    )
}
export default Blog;