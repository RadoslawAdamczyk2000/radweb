import { RiMailOpenLine, RiPhoneLine } from "react-icons/ri";
import ContactItem from "./ContactItem"
import { ContactWrapper } from "./styles";
const Contact = () => {
    return(
        <ContactWrapper>
            <ContactItem
                icon={<RiPhoneLine/>}
                link='tel:+48794100413'
            />
            <ContactItem
                icon={<RiMailOpenLine/>}
                link='mailto:radoslaw.adamczyk2000@gmail.com'
            />
        </ContactWrapper>
    )
}
export default Contact;