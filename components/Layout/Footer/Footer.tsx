import Author from "./Author/Author";
import Info from "./Info/Info";
import Map from "./Map/Map";
import Menu from "./Menu/Menu";
import { FooterWrapper } from "./styles";
const Footer = () => {
    return(
        <FooterWrapper>
            <div>
                <Menu/>
                <Info/>
            </div>
            <div>
                <Map/>
            </div>
            <Author/>
        </FooterWrapper>
    )
}
export default Footer;