import Content from "../Content/Content"
import Poster from "../Poster/Poster"
import { IntAbout } from "./interface"
import { AboutWrapper } from "./styles"
const About = ({button,content,image,path,title}:IntAbout) => {
    return(
        <AboutWrapper>
            <Poster
                image={image}
                title={title}
            />
            <Content
                button={button}
                content={content}
                path={path}
                title={title}
            />
        </AboutWrapper>
    )
}
export default About;