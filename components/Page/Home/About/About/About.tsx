import Content from "../Content/Content"
import Poster from "../Poster/Poster"
import { AboutWrapper } from "./styles";
const About = () => {
    return(
        <AboutWrapper>
            <div>
                <Poster
                    alt="Radosław Adamczyk - zdjęcie"
                    image="/assets/images/tower.webp"
                />  
                <Content
                    button="Poznaj więcej"
                    content="Nazywam się Radosław Adamczyk i urodziłem się 9 października 2000 roku. Jestem absolwentem KPALO w Śremie o profilu matematyczno-fizyczno-informatyczno-historycznym, który w głównej mierze odzwierciedla moje zainteresowania. Od 2016 roku wskoczyłem do świata tworzenia stron internetowych, i od tamtego momentu codziennie uczę się nowości ze świata webu."
                    path="#"
                    title="Kim jestem?"
                />
            </div>
        </AboutWrapper>
    )
}
export default About;