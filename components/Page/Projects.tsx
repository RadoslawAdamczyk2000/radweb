import { IntProjects } from "../../types/interface"
import Content from "./Content";
import { ProjectsWrapper } from "./styles";
const Projects = ({button,children,content='',isHome,path='',title=''}:IntProjects) => {
    return(
        <>
            {
                isHome ?
                <section>
                    <Content
                        button={button}
                        content={content}
                        isVertical={false}
                        path={path}
                        primary={true}
                        title={title}
                        withMedia={false}
                    />
                    <ProjectsWrapper>
                        {children}
                    </ProjectsWrapper>
                </section>:
                <ProjectsWrapper>
                    {children}
                </ProjectsWrapper>
            }
        </>
    )
}
export default Projects;