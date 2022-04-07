import Author from "../../../atoms/Layout/Footer/Author";
import Head from "../../../bacterias/Layout/Footer/Head"
import Info from "../../../atoms/Layout/Footer/Info"
import Newsletter from "../../../bacterias/Layout/Footer/Newsletter";
import { FooterWrapper } from "./styles/FooterWrapper";
const Footer = () => {
    return(
        <FooterWrapper>
            <div>
                <Head/>
                <Info/>
                <Newsletter/>
            </div>
            <div>
                <Author/>
            </div>
        </FooterWrapper>
    )
}
export default Footer;