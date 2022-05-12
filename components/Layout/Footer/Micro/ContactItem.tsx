import { IntContactItemFooter } from "../../../../types/interface";
import { ContactItemWrapper } from "./styles";
const ContactItem = ({icon,link}:IntContactItemFooter) => {
    return(
        <ContactItemWrapper>
            <a href={link}>
                {icon}
            </a>
        </ContactItemWrapper>
    )
}
export default ContactItem;