import Contact from "../Contact/Contact/Contact";
import Credits from "../Credits/Credits/Credits";
import Menu from "../Menu/Menu/Menu";
import { FooterWrapper } from "./styles";

const Footer = () => {
    return(
        <FooterWrapper>
            <Menu/>
            <span/>
            <Contact/>
            <Credits/>
        </FooterWrapper>
    )
}
export default Footer;