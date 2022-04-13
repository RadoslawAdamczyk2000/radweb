import Input from '../../atoms/FaqPage/Input';
import Submit from '../../atoms/FaqPage/Submit';
import {VscClose} from 'react-icons/vsc'
import { faq } from '../../../content/pages/faq';
import { FormWrapper } from './styles/FormWrapper';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
interface i {
    closeForm : any,
    openForm : any
}
const Form = ({closeForm,openForm}:i) => {
    const {button,email,firstName,message} = faq.pl.form;
    const [error,setError] = useState(false);
    const formRef = useRef(null);
    const [form,setForm] = useState({
        firstname:'',
        email:'',
        message:''
    })
    const updateField  = (e:any) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const valid = () => {
        const {email,firstname,message} = form;
        if(firstname && email && message){
            setError(true)
        }else{
            setError(false)
        }
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        closeForm();
        error && if(formRef.current){emailjs.sendForm('service_h8wyrna','template_by3hado',formRef.current,'jiBzcCuVYQCjwhBEu')}
    }
    
    useEffect(() => {
        valid();
    })
    return(
        <FormWrapper>
            <div className='box'>
                <div className='close'>
                    <button onClick={closeForm}>
                        <VscClose/>
                    </button>
                </div>
                <form action="" className='form' onSubmit={handleSubmit} ref={formRef}>
                    <Input 
                        inputId={firstName.inputId} 
                        inputName={firstName.inputName} 
                        title={`${firstName.title}: `}
                        handle={updateField}
                    />
                    <Input 
                        inputId={email.inputId} 
                        inputName={email.inputName} 
                        isMail={true} 
                        title={`${email.title}: `}
                        handle={updateField}
                    />
                    <Input 
                        inputId={message.inputId} 
                        inputName={message.inputName} 
                        title={`${message.title}: `} 
                        handle={updateField}
                    />
                    <Submit title={button.title} handle={closeForm}/>
                </form>
            </div>
        </FormWrapper>
    )
}
export default Form;