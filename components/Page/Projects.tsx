import { IntProjects } from "../../types/interface"
import Content from "./Content";
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
                    <ul>
                        {children}
                    </ul>
                </section>:
                <ul>
                    {children}
                </ul>
            }
        </>
    )
}
export default Projects;