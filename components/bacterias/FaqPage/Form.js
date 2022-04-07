import Input from '../../atoms/FaqPage/Input';
import Submit from '../../atoms/FaqPage/Submit';
import {VscClose} from 'react-icons/vsc'
import { faq } from '../../../content/pages/faq';
import { FormWrapper } from './styles/FormWrapper';
import { useState } from 'react';
// interface i {
//     closeForm : any,
//     openForm : any
// }
const validate = form => {
    if(!form.email){
        return "Uzupełnij e-mail";
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)){
        return "Podaj poprawny e-mail";
    }

    if(!form.firstname){
        return "Uzupełnij imię"
    }else if(form.firstname.length < 2 && form.firstname.length > 50){
        return "Podaj imię ponownie";
    }

    if(!form.message){
        return "Zadaj pytanie"
    }else if(form.message.length < 9){
        return "Zadaj dłuższe pytanie";
    }
    return null;
}
const Form = ({closeForm,openForm}) => {
    const {button,email,firstName,message} = faq.pl.form;
    const [error,setError] = useState(null);
    const [form,setForm] = useState({
        firstname:'',
        email:'',
        message:''
    })
    const updateField  = e => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        closeForm();
        const err = validate(form);
        if(err){
            setError(err);
            console.log(err);
            return;
        }
        console.log(err);
        console.log('form submietted', form);
    }

    return(
        <FormWrapper>
            <div className='box'>
                <div className='close'>
                    <button onClick={closeForm}>
                        <VscClose/>
                    </button>
                </div>
                <form action="" className='form' onSubmit={handleSubmit}>
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