import { footer } from "../../../../data/footer";
import Button from "../../../atoms/Layout/Footer/Button";
import Input from "../../../atoms/Layout/Footer/Input";
import { NewsletterWrapper } from "./styles/NewsletterWrapper";
const Newsletter = () => {
    const {button,content,form,title} = footer.pl.newsletter;
    const {firstName,eMail} = form;
    return(
        <NewsletterWrapper>
            <div>
                <h5>{title}</h5>
                <p>{content}</p>
            </div>
            <div>
                <Input
                    inputId={firstName.inputId}
                    inputName={firstName.inputName}
                    isMail={false}
                    label={firstName.label}
                />
                <Input
                    inputId={eMail.inputId}
                    inputName={eMail.inputName}
                    isMail={true}
                    label={eMail.label}
                />
            </div>
            <Button
                title={button}
            />
        </NewsletterWrapper>
    )
}
export default Newsletter;