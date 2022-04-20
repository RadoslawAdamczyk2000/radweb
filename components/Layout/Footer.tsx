import Author from "./Author"
import Info from "./Info"
import Menu from "./Menu"
import Newsletter from "./Newsletter"
import { FooterWrapper } from "./styles"
const Footer = () => {
    return(
        <FooterWrapper>
            <Info/>
            <Menu
                isFooter={true}
            />
            <Newsletter/>
            <Author/>
        </FooterWrapper>
    )
}
export default Footer;