import ProjectCard from "../../../../All/ProjectCard/ProjectCard";
import Content from "../Content/Content"
import {stack} from "../../../../../data/stack";
import { IntProjects } from "./interface";
const Projects = ({button,content,image,locale,path,title}:IntProjects) => {
    return(
        <div>
            <Content
                button={button}
                content={content}
                image={image}
                path={path}
                title={title}
            />
            <ul>
                <ProjectCard
                    image="https://images.unsplash.com/photo-1648737966614-55e58b5e3caf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                    path="#"
                    stack={[stack.next.icon,stack.styled.icon,stack.typescript.icon]}
                    title="Filip Bukowiecki"
                />
                <ProjectCard
                    image="https://images.unsplash.com/photo-1648737966614-55e58b5e3caf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                    path="#"
                    stack={[stack.next.icon,stack.styled.icon,stack.typescript.icon]}
                    title="Filip Bukowiecki"
                />
                <ProjectCard
                    image="https://images.unsplash.com/photo-1648737966614-55e58b5e3caf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                    path="#"
                    stack={[stack.next.icon,stack.styled.icon,stack.typescript.icon]}
                    title="Filip Bukowiecki"
                />
                <ProjectCard
                    image="https://images.unsplash.com/photo-1648737966614-55e58b5e3caf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                    path="#"
                    stack={[stack.next.icon,stack.styled.icon,stack.typescript.icon]}
                    title="Filip Bukowiecki"
                />
            </ul>
        </div>
    )
}
export default Projects;