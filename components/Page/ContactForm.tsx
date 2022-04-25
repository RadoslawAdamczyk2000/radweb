import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { ContactFormWrapper } from "./styles";
const ContactForm = () => {
    const formRef = useRef<null | HTMLFormElement>(null);
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
       if(formRef.current){emailjs.sendForm('contact','contact',formRef.current,'jiBzcCuVYQCjwhBEu')}
    }
    return(
        <ContactFormWrapper>
            <div className="field input">
                <input
                    autoComplete="off"
                    id='fullname'
                    name='fullname'
                    maxLength={50}
                    minLength={3}
                    placeholder='Imię i nazwisko'
                    type='text'
                />
                <span/>
            </div>       
            <div className="field input">
                <input
                    autoComplete="off"
                    id='phone'
                    name='phone'
                    placeholder='Numer telefonu'
                    minLength={5}
                    required
                    type='tel'
                />
                <span/>
            </div>       
            <div className="field input">
                <input
                    autoComplete="off"
                    id='eamil'
                    minLength={5}
                    name='email'
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    placeholder='Adres e-mail'
                    required
                    type='email'
                />
                <span/>
            </div>       
            <div className="field area">
                <textarea 
                    autoComplete="off"
                    autoCorrect='on'
                    id='message'
                    minLength={10}
                    name='message'
                    placeholder='Wiadomość'
                    required
                    wrap='soft'
                />
            </div>
            <button className="submit" type='submit'>
                Wyślij
            </button>
        </ContactFormWrapper>
    )
}
export default ContactForm;