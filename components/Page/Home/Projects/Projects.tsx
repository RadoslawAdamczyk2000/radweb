import Link from "next/link";
import { home } from "../../../../content/home";
import { posts } from "../../../../data/posts";
import Card from "./Card";
import { ProjectsWrapper } from "./styles";

const Projects = () => {
    const {button,content,title} = home.page.projects;
    const {projects} = posts;
    return(
        <ProjectsWrapper>
            <article>
                <h2>{title}</h2>
                <p>{content}</p>
            </article>
            <ul>
                {projects.slice(0,6).reverse().map(({title,image,stack,path,excerpt},key) =>
                    <Card
                        content={excerpt}
                        image={image}
                        key={key}
                        link={path}
                        stack={stack}
                        title={title}
                    />
                )}
                
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