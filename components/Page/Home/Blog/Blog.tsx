import Link from "next/link";
import { home } from "../../../../content/home";
import Card from "./Card";
import { BlogWrapper } from "./styles";
const Blog = () => {
    const {button,content,title} = home.page.blog;
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
                <Card
                    date={'05-10-2022'}
                    image='https://cdn.pixabay.com/photo/2020/02/25/09/57/road-4878453_960_720.jpg'
                    link="/"
                    tags={[
                        {
                            link:'',
                            tag:'programowanie'
                        },
                        {
                            link:'',
                            tag:'css'
                        },
                    ]}
                    title='Pseudo CSS I - pseudoklasy'
                />
                <Card
                    date={'05-10-2022'}
                    image='https://cdn.pixabay.com/photo/2022/04/23/20/51/nature-7152461__340.jpg'
                    link="/"
                    tags={[
                        {
                            link:'',
                            tag:'programowanie'
                        },
                        {
                            link:'',
                            tag:'css'
                        },
                    ]}
                    title='Pseudo CSS I - pseudoklasy'
                />
                <Card
                    date={'05-10-2022'}
                    image='https://cdn.pixabay.com/photo/2021/11/16/17/29/fashion-6801626__340.jpg'
                    link="/"
                    tags={[
                        {
                            link:'',
                            tag:'programowanie'
                        },
                        {
                            link:'',
                            tag:'css'
                        },
                    ]}
                    title='Pseudo CSS I - pseudoklasy'
                />
                <Card
                    date={'05-10-2022'}
                    image='https://cdn.pixabay.com/photo/2022/05/04/02/29/calligraphy-7173006__340.jpg'
                    link="/"
                    tags={[
                        {
                            link:'',
                            tag:'programowanie'
                        },
                        {
                            link:'',
                            tag:'css'
                        },
                    ]}
                    title='Pseudo CSS I - pseudoklasy'
                />
                <Card
                    date={'05-10-2022'}
                    image='https://cdn.pixabay.com/photo/2022/01/10/16/18/sea-arch-6928714__340.jpg'
                    link="/"
                    tags={[
                        {
                            link:'',
                            tag:'programowanie'
                        },
                        {
                            link:'',
                            tag:'css'
                        },
                    ]}
                    title='Pseudo CSS I - pseudoklasy'
                />
            </ul>       
        </BlogWrapper>
    )
}
export default Blog;