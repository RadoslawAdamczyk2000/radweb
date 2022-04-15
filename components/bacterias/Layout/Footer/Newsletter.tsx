import { footer } from "../../../../data/footer";
import Button from "../../../atoms/Layout/Footer/Button";
import Input from "../../../atoms/Layout/Footer/Input";
import { NewsletterWrapper } from "./styles/NewsletterWrapper";
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from "react";

const Newsletter = () => {
    const [err,setErr] = useState(false);
    const {button,content,form,title} = footer.pl.newsletter;
    const {firstName,eMail} = form;
    const formRef = useRef<null | HTMLFormElement>(null);
    
    const [fields,setFields] = useState({
        firstname:'',
        email:''
    })
    const updateField  = (e:any) => {
        setFields({
            ...fields,
            [e.target.name]:e.target.value
        })
    }
    const checkFields = () => {
        if(fields.firstname.length > 2 && fields.firstname.length < 30){
            setErr(true)
        }else{
            setErr(false)
        }
        if(fields.email.length > 5){
            setErr(true)
        }else{
            setErr(false)
        }
    }
    const send = () => {
        if(formRef.current){
            emailjs.sendForm('newsletter','contact',formRef.current,'jiBzcCuVYQCjwhBEu')
        }
    }
    const handleSubmit = async () => {
        // e.preventDefault();
        {
            err ?
            (
               send(),alert('Zapisałeś się na newsletter')
            )  :
            alert('Popraw wprowadzone dane')
        }
    }
    useEffect(() => {
        checkFields();
        console.log(err);
    })
    return(
        <NewsletterWrapper>
            <div>
                <h5>{title}</h5>
                <p>{content}</p>
            </div>
            <form onSubmit={handleSubmit} method='post' ref={formRef}>
                <Input
                    inputId={firstName.inputId}
                    isMail={false}
                    inputName={firstName.inputName}
                    handle={updateField}    
                    label={firstName.label}
                />
                <Input
                    inputId={eMail.inputId}
                    isMail={true}
                    inputName={eMail.inputName}
                    handle={updateField}
                    label={eMail.label}
                />
            </form>
            <Button
                title={button}
            />
        </NewsletterWrapper>
    )
}
export default Newsletter;