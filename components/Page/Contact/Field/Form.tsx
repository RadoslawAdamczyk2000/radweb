import { useRef, useState } from "react"
import Alert from "./Alert"
import Button from "./Button"
import Field from "./Field"
import Message from "./Messeage"
import { FormWrapper } from "./styles"
import emailjs from '@emailjs/browser';
import Subject from "./Subject"
const Form = () => {
    const [isCorrectForm,setCorrectForm] = useState(false)
    const [form,setForm] = useState({
        fullname:'',
        phone:'',
        email:'',
        subject:'',
        message:''
    })
    const formRef = useRef(null);
    const updateForm = (e:any) => {
        setForm(
            {
                ...form,
                [e.target.name]:e.target.value
            },

        )
    }
    const sendForm = (e:any) => {
        e.preventDefault();
        if(formRef.current){
            emailjs.sendForm('contact','contact',formRef.current,'jiBzcCuVYQCjwhBEu');
            setForm({
                fullname:'',
                phone:'',
                email:'',
                subject:'',
                message:''
            })
            setCorrectForm(true);
        }else{
            setCorrectForm(false);
        }
    }
    console.log(formRef.current);
    // console.log(form)
    return(
        <>
            <FormWrapper ref={formRef} onSubmit={sendForm} method='POST'>
                <Field
                    placeholder="imię i nazwisko"
                    id='fullname'
                    title="Imię i nazwisko"
                    handle={updateForm}
                />
                <Field
                    handle={updateForm}
                    id='phone'
                    placeholder="telefon"
                    title="Numer telefonu"
                    type="tel"
                />
                <Field
                    handle={updateForm}
                    id='email'
                    placeholder="e-mail"
                    title="Adres e-mail"
                    pattern=""
                    type="email"
                />
                <Subject
                    handle={updateForm}
                />
                <Message
                    handle={updateForm}
                    id='message'
                    placeholder="treść wiadomość"
                    title="Wiadomość"
                />
                <Button/> 
            </FormWrapper>
            {
                isCorrectForm &&
                <Alert
                    answerCorrect="Dziękujemy za wysłanie wiadomości"
                    answerError="Wystąpił błąd, spróbuj ponownie"
                    isCorrect={true}
                />
            }
            
        </>
    )
}
export default Form;