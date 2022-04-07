import Content from "../../../atoms/HomePage/About/Content"
import Movie from "../../../atoms/HomePage/About/Movie"
import { AboutWrapper } from "./styles/AboutWrapper";
const About = () => {
    return(
        <AboutWrapper>
            <div className="video">
                <Movie/>
            </div>
            <div className="content">
                <Content/>
            </div>
        </AboutWrapper>
    )
}
export default About;