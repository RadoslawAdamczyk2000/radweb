import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../AllPages/Input";
import { FormWrapper } from "./styles/FormWrapper";
const Form = () => {


    const [fullName,setFullName] = useState('');
    let correctFullName = '';
    const fullNameRef = useRef(null);
    
    const [phone,setPhone] = useState('');
    let correctPhone = '';

    const [email,setEmail] = useState('');
    let correctMail = '';


    const [message,setMessage] = useState('');
    let correctMessage = '';

    const {register,handleSubmit} = useForm();
    const handleOnSubmit = data => console.log(data);
    const checkValues = () => {
        if(fullName){
            if(fullName.length > 2 && fullName.length < 35){
                if(fullName.includes(" ",0)){
                    correctFullName = fullName;
                }
            }
        }
        if(phone){
            if(phone.length > 8 && phone.length < 16){
                correctPhone = phone;
                console.log(phone);
            }
        }
        if(email){
            if(email.length > 2){
                if((email.includes("@",0) && email.includes(".",0)) && (email.includes(".com",0) || email.includes(".pl",0))){
                    correctMail = email;
                }
            }
        }

        if(message && message.length > 9){
            correctMessage = message;
        }
    }
    useEffect(() => {
        // console.log(correctMail);
        // console.log(correctMessage);
        // console.log(correctPhone);
        // console.log(correctFullName);
        // console.log(`firstname : ${firstName}`);
        // console.log(`phone : ${phone}`);
        // console.log(`email : ${email}`);
        // console.log(fullNameRef.current)
    });

    return(
        <FormWrapper>
            <form action="" onSubmit={handleSubmit(checkValues)} method='post'>
                <Input
                    handle={setFullName}
                    inputId="fullname"
                    inputName="fullname"
                    isInput
                    place="Imię i nazwisko"
                    title="Imię i nazwisko"
                    val={fullName}
                />
                <Input
                    handle={setPhone}
                    inputId="phone"
                    isInput
                    inputName="phone"
                    place="Telefon"
                    title="Numer telefonu"
                    inputType="tel"
                    val={phone}
                />
                <Input
                    handle={setEmail}
                    inputId="email"
                    inputName="email"
                    place="E-mail"
                    title="Adres e-mail"
                    inputType="email"
                    isInput
                    val={email}
                />
                <Input
                    handle={setMessage}
                    inputId="message"
                    inputName="message"
                    place="Wiadomość"
                    title="Wiadomość"
                    isText
                    val={message}
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