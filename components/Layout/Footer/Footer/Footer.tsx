import Author from "../Author/Author";
import Menu from "../Menu/Menu/Menu";
import Micro from "../Micro/Micro";
import Socials from "../Socials/Socials/Socials";
import { Wrapper } from "./styles";
const Footer = () => {
    return(
        <Wrapper>
            <div className='micro'>
                <Micro/>
                <Socials/>
            </div>
            <Menu/>
            <Author/>
        </Wrapper>
    )
}
export default Footer;