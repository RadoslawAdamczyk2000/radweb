import Input from "../AllPages/Input";
import { FormWrapper } from "./styles/FormWrapper";
const Form = () => {
    return(
        <FormWrapper>
            <form action="">
                <Input
                    inputId="fullname"
                    inputName="fullname"
                    place="Imię i nazwisko"
                    title="Imię i nazwisko"
                    isInput
                />
                <Input
                    inputId="phone"
                    inputName="phone"
                    place="Telefon"
                    title="Numer telefonu"
                    inputType="tel"
                    isInput
                />
                <Input
                    inputId="email"
                    inputName="email"
                    place="E-mail"
                    title="Adres e-mail"
                    inputType="email"
                    isInput
                />
                <Input
                    inputId="message"
                    inputName="message"
                    place="Wiadomość"
                    title="Wiadomość"
                    isText
                />
                <Input
                    title="Wyślij"
                    isSubmit
                />
            </form>
        </FormWrapper>
    )
}
export default Form;