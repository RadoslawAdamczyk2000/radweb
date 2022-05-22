import Link from "next/link";
import { home } from "../../../../content/home";
import { stack } from "../../../../data/stack";
import Card from "./Card";
import { ProjectsWrapper } from "./styles";

const Projects = () => {
    const {button,content,title} = home.page.projects;
    return(
        <ProjectsWrapper>
            <article>
                <h2>{title}</h2>
                <p>{content}</p>
            </article>
            <ul>
                <Card
                    content='Doskonale wiem jak powinna działać oraz wyglądać nowoczesna strona internetowa oraz co powinna zawierać aby była przyjazna przeglądarkom. Jednak to jest jedynie namiastka tego co oferuję, więc jeśli zainteresowała Ciebie moja osoba zapraszam do sprawdzenia wszystkich ofert.'
                    image="https://cdn.pixabay.com/photo/2017/10/13/15/29/coffee-2847957_960_720.jpg"
                    link="/"
                    stack={[stack.html,stack.css,stack.bootstrap,stack.seo]}
                    title='Borówkowy Gaj'
                />
                <Card
                    content='Doskonale wiem jak powinna działać oraz wyglądać nowoczesna strona internetowa oraz co powinna zawierać aby była przyjazna przeglądarkom. Jednak to jest jedynie namiastka tego co oferuję, więc jeśli zainteresowała Ciebie moja osoba zapraszam do sprawdzenia wszystkich ofert.'
                    image="https://cdn.pixabay.com/photo/2017/10/13/15/29/coffee-2847957_960_720.jpg"
                    link="/"
                    stack={[stack.html,stack.css,stack.bootstrap,stack.seo]}
                    title='Borówkowy Gaj'
                />
                <Card
                    content='Doskonale wiem jak powinna działać oraz wyglądać nowoczesna strona internetowa oraz co powinna zawierać aby była przyjazna przeglądarkom. Jednak to jest jedynie namiastka tego co oferuję, więc jeśli zainteresowała Ciebie moja osoba zapraszam do sprawdzenia wszystkich ofert.'
                    image="https://cdn.pixabay.com/photo/2017/10/13/15/29/coffee-2847957_960_720.jpg"
                    link="/"
                    stack={[stack.html,stack.css,stack.bootstrap,stack.seo]}
                    title='Borówkowy Gaj'
                />
                <Card
                    content='Doskonale wiem jak powinna działać oraz wyglądać nowoczesna strona internetowa oraz co powinna zawierać aby była przyjazna przeglądarkom. Jednak to jest jedynie namiastka tego co oferuję, więc jeśli zainteresowała Ciebie moja osoba zapraszam do sprawdzenia wszystkich ofert.'
                    image="https://cdn.pixabay.com/photo/2017/10/13/15/29/coffee-2847957_960_720.jpg"
                    link="/"
                    stack={[stack.html,stack.css,stack.bootstrap,stack.seo]}
                    title='Borówkowy Gaj'
                />
                <Card
                    content='Doskonale wiem jak powinna działać oraz wyglądać nowoczesna strona internetowa oraz co powinna zawierać aby była przyjazna przeglądarkom. Jednak to jest jedynie namiastka tego co oferuję, więc jeśli zainteresowała Ciebie moja osoba zapraszam do sprawdzenia wszystkich ofert.'
                    image="https://cdn.pixabay.com/photo/2017/10/13/15/29/coffee-2847957_960_720.jpg"
                    link="/"
                    stack={[stack.html,stack.css,stack.bootstrap,stack.seo]}
                    title='Borówkowy Gaj'
                />
                <Card
                    content='Doskonale wiem jak powinna działać oraz wyglądać nowoczesna strona internetowa oraz co powinna zawierać aby była przyjazna przeglądarkom. Jednak to jest jedynie namiastka tego co oferuję, więc jeśli zainteresowała Ciebie moja osoba zapraszam do sprawdzenia wszystkich ofert.'
                    image="https://cdn.pixabay.com/photo/2017/10/13/15/29/coffee-2847957_960_720.jpg"
                    link="/"
                    stack={[stack.html,stack.css,stack.bootstrap,stack.seo]}
                    title='Borówkowy Gaj'
                />
            </ul>
            <div>
                <Link href={button.path}>
                    <a>
                        {button.title}
                    </a>
                </Link>
            </div>
        </ProjectsWrapper>
    )
}
export default Projects;