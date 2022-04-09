import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { contact } from "../../../content/pages/contact";
import Input from "../AllPages/Input";
import { FormWrapper } from "./styles/FormWrapper";
import emailjs from '@emailjs/browser';
const Form = () => {
    const formRef = useRef(null);
    const {email,fullname,phone} = contact.pl.form;
    const [form,setForm] = useState({
        fullname:'',
        phone:'',
        email:'',
        message:''
    })
    const updateFields = (e:any) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        emailjs.sendForm('contact','contact',formRef.current,'jiBzcCuVYQCjwhBEu')
    }
    
    useEffect(() => {
    });

    return(
        <FormWrapper>
            <form action="" onSubmit={handleSubmit} method='post' ref={formRef}>
                <Input
                    handle={updateFields}
                    inputId={fullname.inputId}
                    inputName={fullname.inputName}
                    isInput
                    place={fullname.place}
                    title={fullname.title}
                />
                <Input
                    handle={updateFields}
                    inputId={phone.inputId}
                    isInput
                    inputName={phone.inputName}
                    place={phone.place}
                    title={phone.title}
                    inputType="tel"
                />
                <Input
                    handle={updateFields}
                    inputId={email.inputId}
                    inputName={email.inputName}
                    place={email.place}
                    title={email.title}
                    inputType="email"
                    isInput
                />
                <Input
                    handle={updateFields}
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