import Author from "./Author/Author";
import Info from "./Info/Info";
import Map from "./Map/Map";
import Menu from "./Menu/Menu";
import Newsletter from "./Newsletter/Newsletter";
import { FooterWrapper } from "./styles";
const Footer = () => {
    return(
        <FooterWrapper>
            <div>
                <Menu/>
                <Newsletter/>
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